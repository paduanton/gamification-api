import ReportsModel from '../models/reports'

const model = new ReportsModel();

export function getReports(req, response) {
    model.find((data) => {
        if (Array.isArray(data) === false) {
            response.status(400).json({
                error: "can't reach database"
            });
        }

        if (data.length === 0) {
            response.status(404).json([]);
        }

        response.status(200).json(data);
    });
}

export function getReport(req, response) {
    model.findById(req.params.id, (data) => {
        if (data == null) {
            response.status(404).json({});
        }
        response.status(200).json(data);
    });
}