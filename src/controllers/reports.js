import ReportModel from '../models/reports'
export class ReportController {

    constructor() {
        this[model] = new ReportModel()
    }

    postReport(req, res) {
        let newReport = new ReportModel(req.body)
        newReport.save((error, report) => {
            if (error) { res.json(error) }
            res.json(report)
        })
    }

    getReports = (req, res) => {
        report.find({}, (error, reports) => {
            if (error) { res.json(error) }
            res.json(reports)
        })
    }

    getReport = (req, res) => {
        Report.findById(req.params.id, (error, report) => {
            if (error) { res.json(error) }
            res.json(report)
        })
    }
    putReport = (req, res) => {
        Report.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, report) => {
            if (error) { res.json(error) }
            res.json(report)
        })
    }

    deleteReport = (req, res) => {
        Report.remove({ _id: req.params.id }, (error, download) => {
            if (error) { res.json(error) }
            res.json(report)
        })
    }

}