import DatabaseModel from './database'

class LeaderBoardsModel extends DatabaseModel {

    constructor(leaderBoardsObject) {
        const table = 'leaderboards';
        super(table, leaderBoardsObject);
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
}

module.exports = LeaderBoardsModel;