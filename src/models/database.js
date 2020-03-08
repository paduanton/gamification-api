import mysql from "mysql";
import dotenv from "dotenv";

class DatabaseModel {

    constructor(table, modelObject) {
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
        this.modelObject = modelObject;
    }

    select(callback) {
        const sql = `SELECT * FROM ${this.table}`;
        try {
            this.connection.query(sql, (err, result) => {
                if (err) {
                    console.log("err durante select(): " + err);
                    callback(err, null);
                }
                callback(null, result);
            });
        } catch (error) {
            console.log('select', error)
        }
    }

    selectById(id, callback) {
        const sql = `SELECT * FROM ${this.table} WHERE id = ${id}`;
        try {
            this.connection.query(sql, (err, result) => {
                if (err) {
                    console.log("err durante selectById(): " + err);
                    callback(err, null);
                }
                callback(null, result[0]);
            });
        } catch (error) {
            console.log('selectById', error)
        }
    }

    insert(callback) {
        const keys = Object.keys(this.modelObject)
        const values = Object.values(this.modelObject)

        const keysQuery = keys.toString();
        const valuesQuery = values.toString();

        const sql = `INSERT INTO ${this.table} (${keysQuery}) VALUES (${valuesQuery})`

        try {
            this.connection.query(sql, (err, result) => {
                if (err) {
                    console.log("err durante insert(): " + err);
                    callback(err, null);
                }
                callback(null, result[0]);
            });
        } catch (error) {
            console.log('insert', error)
        }
    }

    update(id, modelObject, callback) {
        try {
            const keys = Object.keys(modelObject)
            const values = Object.values(modelObject)

            let setQuery = ''

            for (index in keys) {
                setQuery += `${keys[index]} = ${values[index]},`
            }

            const set = setQuery.substring(0, setQuery.length - 1);
            const sql = `UPDATE ${this.table} SET ${set} WHERE id = ${id}`;

            this.connection.query(sql, (err, result) => {
                if (err) {
                    console.log("err durante update(): " + err);
                    callback(err, null);
                }
                callback(null, result[0]);
            });
        } catch (error) {
            console.log('update', error)
        }
    }
}

module.exports = DatabaseModel;