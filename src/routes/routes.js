
import { postReport, getReport, getReports, putReport, deleteReport } from '../controllers/report'

const routes = (app) => {
    app.route('/report')
        .get(getReports)
        .post(postReport)

    app.route('/report/:id')
        .get(getReport)
        .put(putReport)
        .delete(deleteReport)
}

export default routes