import mysql from 'mysql';
import {
    DB_HOST, DB_PORT,
    DB_NAME, DB_USER,
    DB_PASS
} from '../../src/environments/database';

class DatabaseModel {

    constructor(table, modelObject) {

        this.connection = mysql.createPool({
            connectionLimit: 20,
            host: DB_HOST,
            port: DB_PORT,
            database: DB_NAME,
            user: DB_USER,
            password: DB_PASS
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
        const sql = `SELECT * FROM ${this.table} WHERE id = ${id} LIMIT 1`;
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

    selectByGenericKey(object, callback) {
        const sql = `SELECT * FROM ${this.table} WHERE ?`;
        try {
            this.connection.query(sql, object, (err, result) => {
                if (err) {
                    console.log("err durante selectByGenericKey(): " + err);
                    callback(err, null);
                }

                if(result.length === 1) {
                    callback(null, result[0]);
                } else {
                    callback(null, result);
                }
                
            });
        } catch (error) {
            console.log('selectByGenericKey', error)
        }
    }

    insert(callback) {
        const sql = `INSERT INTO ${this.table} SET ?`
        try {
            this.connection.query(sql, this.modelObject, (err, result) => {
                if (err) {
                    console.log("err durante insert(): " + err);
                    callback(err, null);
                }
                this.selectById(result.insertId, (err, data) => {
                    if (err) {
                        throw err;
                    }
                    callback(data);
                });
            });
        } catch (error) {
            console.log('insert', error)
        }
    }

    update(id, callback) {
        const sql = `UPDATE ${this.table} SET ? WHERE id = ${id}`;
        try {
            this.connection.query(sql, this.modelObject, (err, result) => {
                if (err) {
                    console.log("err durante update(): " + err);
                    callback(null);
                }

                this.selectById(id, (err, data) => {
                    if (err) {
                        throw err;
                    }
                    callback(data);
                });
            });
        } catch (error) {
            console.log('update', error)
        }
    }

    delete(id, callback) {
        const sql = `DELETE FROM ${this.table} WHERE id = ${id}`;
        try {
            this.connection.query(sql, (err, result) => {
                if (err) {
                    console.log("err durante delete(): " + err);
                    callback(err, null);
                }
                
                callback(null, result);
            });
        } catch (error) {
            console.log('update', error)
        }
    }
}

module.exports = DatabaseModel;