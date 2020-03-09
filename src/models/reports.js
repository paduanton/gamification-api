import DatabaseModel from './database'

class ReportsModel extends DatabaseModel {

    constructor(reportObject) {
        const table = 'reports';
        super(table, reportObject);
    }

    save(callback) {
        super.insert((err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    }

    find(callback) {
        super.select((err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    }

    findById(id, callback) {
        super.selectById(id, (err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    }

    findOneAndUpdate(id, callback) {
        super.update(id, (err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    }

    remove() {
        super.delete(id, (err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    }
}

module.exports = ReportsModel;