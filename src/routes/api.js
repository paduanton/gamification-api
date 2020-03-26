
import { getReports, getReport, postReport, putReport, deleteReport } from '../controllers/reports'
import { getUsers, getUser, postUser } from '../controllers/users'
import { postReportScore } from '../controllers/usersReportsScore'
import { getUsersScore } from '../controllers/leaderboards'

const routes = (app) => {
    app.route('/users')
        .get(getUsers)
        .post(postUser);

    app.route('/users/:id')
        .get(getUser);

    app.route('/reports')
        .get(getReports)
        .post(postReport);

    app.route('/reports/:id')
        .get(getReport)
        .put(putReport)
        .delete(deleteReport);

    app.route('/users/:usersId/reports/:reportsId/score')
        .post(postReportScore);

    app.route('/users/:usersId/score')
        .get(getUsersScore);
}

export default routes