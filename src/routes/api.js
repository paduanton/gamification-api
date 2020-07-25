
import {
    getReports, getReport,
    postReport, putReport,
    deleteReport
} from '../controllers/reports';
import { getUsers, getUser, postUser } from '../controllers/users';
import { postReportScore } from '../controllers/usersReportsScore';
import { getUsersScore } from '../controllers/leaderboards';
import { getUsersActionHistory } from '../controllers/actionHistory';
import { APP_ENV } from '../environments/server';

const routes = (app) => {
    app.route('/')
        .get(function (request, response) {
            return response.status(200).json(
                ['gamification-v1-api', new Date().toString(), APP_ENV]
            );
        });

    app.route('/users')
        .get(getUsers)
        .post(postUser);

    app.route('/users/:id')
        .get(getUser);

    app.route('/reports')
        .get(getReports);

    app.route('/users/:usersId/reports')
        .post(postReport);

    app.route('/reports/:id')
        .get(getReport)
        .put(putReport)
        .delete(deleteReport);

    app.route('/users/:usersId/reports/:reportsId/score')
        .post(postReportScore);

    app.route('/users/:usersId/score')
        .get(getUsersScore);

    app.route('/users/:usersId/history')
        .get(getUsersActionHistory);

};

module.exports = routes;