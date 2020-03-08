import DatabaseModel from './database'

class ReportModel extends DatabaseModel {

    constructor() {
        // this[userId] = object.userId;
        // this[post] = object.post;
        // this[helpful] = object.helpful;
        // this[description] = object.description;
        // this[approved] = object.approved;
        const table = 'reports';
        super(table)
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

    findById() {

    }

    findOneAndUpdate() {

    }

    remove() {

    }
}

module.exports = ReportModel;