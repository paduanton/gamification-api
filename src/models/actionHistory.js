import DatabaseModel from './database'

class ActionHistoryModel extends DatabaseModel {

    constructor(actionHistoryObject) {
        const table = 'action_history';
        super(table, actionHistoryObject);
    }

    findByGenericKey(object, callback) {
        super.selectByGenericKey(object, (err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    }

    save(callback) {
        super.insert((err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    }

}

module.exports = ActionHistoryModel;