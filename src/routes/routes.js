
import { addReport, getReports, getReports, updateReports, deleteReport } from '../controllers/report'
 
const routes = (app) => {
    app.route('/report')
        .get(getReports)
        .post(addReport)
 
    app.route('/report/:id')
        .get(getReport)
        .put(updateReports)
        .delete(deleteReport)
}
 
export default routes