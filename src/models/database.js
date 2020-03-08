import mysql from "mysql";
import dotenv from "dotenv";

class DatabaseModel {

    constructor(table) {
        dotenv.config();

         this.connection = mysql.createConnection({
            host: `${process.env.DB_HOST}`,
            port: `${process.env.DB_PORT}`,
            user: `${process.env.DB_USER}`,
            password: `${process.env.DB_PASS}`,
            database: `${process.env.DB_NAME}`,
        });

        this.connection.connect(function (err) {
            if (err) {
                console.log("Erro ao conectar com banco: " + err);
                throw err;
            }
        });

        this.table = table;
    }

    select(callback) {
        const sql = `SELECT * FROM ${this.table}`;

        this.connection.query(sql,  (err, result) => {
            if (err) {
                console.log("err durante select(): " + err);
                callback(err, null);
            }
            callback(null, result);
        });

    }

    selectById(table, id) {
        const sql = `SELECT * FROM ${table} WHERE id = ${id}`;

        _query(sql, (error, result) => {
            console.log('errorSelectId', error)
            console.log('resultSelectId', result)
        });
    }

    insert(table, dataObject) {
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

    update(table, dataObject, id) {
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

module.exports = DatabaseModel;