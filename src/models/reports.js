import DatabaseModel from './database'

class ReportsModel extends DatabaseModel {

    constructor(reportObject) {
        const table = 'reports';
        super(table, reportObject);
    }

    save() {

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

    findOneAndUpdate() {

    }

    remove() {

    }
}

module.exports = ReportsModel;