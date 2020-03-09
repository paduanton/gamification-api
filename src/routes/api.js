
import { getReports, getReport, postReport, putReport, deleteReport } from '../controllers/reports'

const routes = (app) => {
    app.route('/reports')
        .get(getReports)
        .post(postReport)

    app.route('/reports/:id')
        .get(getReport)
        .put(putReport)
        .delete(deleteReport)

    app.route('/users')
        // .post(postUser)
}

export default routes