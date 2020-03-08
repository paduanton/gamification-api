import ReportModel from '../models/reports'
// export class ReportController {

    // constructor() {
       
    // }

    export function getReports (req, res) {
        const model = new ReportModel();
        model.find(( reports) => {
            // if (error) { res.json(error) }
            
            res.json(reports)
        })
    }

// }