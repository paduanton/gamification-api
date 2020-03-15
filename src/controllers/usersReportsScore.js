import UsersReportsScoreModel from '../models/usersReportsScore'
import ReportsRewards from '../services/reportsRewards'

export function postReportScore(request, response) {
    let UsersReportsScore = {
        users_id: request.params.userId,
        reports_id: request.params.reportId
    };
    const requestBody = request.body;

    if (Object.keys(request.body).length === 0) {
        return response.status(400).json({
            error: "POST request must have a body"
        });
    }

    if (requestBody.constructor.name !== "Object") {
        return response.status(400).json({
            error: "request body is not properly formated"
        });
    }
    const score = new ReportsRewards(provider, requestBody.approved, requestBody.has_solution)
    UsersReportsScore.value = score.toString();
    
    const newModel = new UsersReportsScoreModel(UsersReportsScore);
    newModel.save((data) => {
        if (!data) {
            return response.status(500).json({
                error: "can't POST data"
            });
        }

        if (data.hasOwnProperty("code")) {
            return response.status(400).json({
                code: data.errno,
                message: data.sqlMessage,
                serverMessage: data.code
            });
        }

        if (data.id) {
            return response.status(201).json(data);
        }

        return response.status(503).json(data);
    });
}