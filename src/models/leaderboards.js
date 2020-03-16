import DatabaseModel from './database'

class LeaderBoardsModel extends DatabaseModel {

    constructor(reportObject) {
        const table = 'leaderboards';
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

    findByGenericKey(object, callback) {
        super.selectByGenericKey(object, (err, data) => {
            if (err) {
                callback(err);
            }
            callback(data);
        });
    }
}

module.exports = LeaderBoardsModel;