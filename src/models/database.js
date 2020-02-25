import mysql from "mysql";
import dotenv from "dotenv";

export class Database {

    constructor() {
        dotenv.config();

        this[pool] = mysql.createPool({
            connectionLimit: 10,
            host: `${process.env.DB_HOST}`,
            port: `${process.env.DB_PORT}`,
            user: `${process.env.DB_USER}`,
            password: `${process.env.DB_PASS}`,
            database: `${process.env.DB_NAME}`,
            debug: true
        });
    }

    _query = (sql, callback) => {
        try {
            this[pool].getConnection((err, connection) => {
                if (err) {
                    return callback(err, null);
                } else {
                    if (connection) {
                        connection.query(sql, function (error, results, fields) {
                            connection.release();
                            if (error) {
                                return callback(error, null);
                            }
                            return callback(null, results);
                        });
                    }
                }
            });
        } catch (error) {
            console.log("query", error)
        }
    }

    select = () => {
        const sql = 'SELECT * FROM report';

        _query(sql, (error, result) => {
            console.log('errorUpdate', error)
            console.log('updateResult', result)
        });
    }

    insert = (table, dataObject) => {
        const keys = Object.keys(dataObject)
        const values = Object.values(dataObject)

        const keysQuery = keys.toString();
        const valuesQuery = values.toString();

        const sql = `INSERT INTO ${table} (${keysQuery}) VALUES (${valuesQuery})`
        
        _query(sql, (error, result) => {
            console.log('errorInsert', error)
            console.log('insertResult', result)
        });
    }

    update = (table, dataObject, id) => {
        try {
            const keys = Object.keys(dataObject)
            const values = Object.values(dataObject)

            let setQuery = ''

            for (index in keys) {
                setQuery += `${keys[index]} = ${values[index]},`
            }

            const set = setQuery.substring(0, setQuery.length - 1);
            const sql = `UPDATE ${table} SET ${set} WHERE id = ${id}`;

            _query(sql, (error, result) => {
                console.log('errorUpdate', error)
                console.log('updateResult', result)
            });
        } catch (error) {
            console.log('update', error)
        }
    }
}