import ReportsModel from '../models/reports'

const model = new ReportsModel();

export function getReports(req, res) {
    model.find((reports) => {
        // if (error) { res.json(error) }

        res.status(400).json(reports)
    })
}