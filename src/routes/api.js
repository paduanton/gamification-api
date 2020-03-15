
import { getReports, getReport, postReport, putReport, deleteReport } from '../controllers/reports'
import { getUser, postUser } from '../controllers/users'
import {postReportScore} from '../controllers/usersReportsScore'

const routes = (app) => {
    app.route('/users')
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

    app.route('/users/:userId/reports/:reportsId/score')
        .post(postReportScore);
}

export default routes