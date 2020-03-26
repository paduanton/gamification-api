import DatabaseModel from './database'

class UsersModel extends DatabaseModel {

    constructor(userObject) {
        const table = 'users';
        super(table, userObject);
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

    findByGenericKey(object, callback) {
        super.selectByGenericKey(object, (err, data) => {
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

    remove(id, callback) {
        super.delete(id, (err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    }
}

module.exports = UsersModel;