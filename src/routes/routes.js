
import { addReport, getReport, getReports, updateReports, deleteReport } from '../controllers/report'
 
const routes = (app) => {
    app.route('/report')
        .get(getReports)
        .post(addReport)
 
    app.route('/report/:id')
        .get(getReport)
        .put(putReports)
        .delete(deleteReport)
}
 
export default routes