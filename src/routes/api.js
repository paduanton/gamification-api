
import { getReports, getReport, postReport, putReport, deleteReport } from '../controllers/reports'
import { getUser, postUser } from '../controllers/users'

const routes = (app) => {
    app.route('/reports')
        .get(getReports)
        .post(postReport)

    app.route('/reports/:id')
        .get(getReport)
        .put(putReport)
        .delete(deleteReport)

    app.route('/users')
        .post(postUser)

    app.route('/users/:id')
        .get(getUser)
}

export default routes