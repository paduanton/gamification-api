import DatabaseModel from './database'

class UsersReportsScoreModel extends DatabaseModel {

    constructor(UsersReportsScoreObject) {
        const table = 'users_reports_score';
        super(table, UsersReportsScoreObject);
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

module.exports = UsersReportsScoreModel;