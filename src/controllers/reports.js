import ReportsModel from '../models/reports'

const model = new ReportsModel();

export function getReports(request, response) {
    if (request.body != null) {
        response.status(400).json({
            error: "DELETE request must not have a body"
        });
    }

    model.find((data) => {
        if (Array.isArray(data) === false) {
            response.status(400).json({
                error: "can't reach database"
            });
        }

        if (data.length === 0) {
            response.status(404);
        }

        response.status(200).json(data);
    });
}

export function getReport(request, response) {
    const id = request.params.id;

    if (id != Number(id)) {
        response.status(400).json({
            error: "id param must be int"
        });
    }

    if (request.body != null) {
        response.status(400).json({
            error: "DELETE request must not have a body"
        });
    }

    model.findById(id, (data) => {

        if (data == null) {
            response.status(404);
        }
        response.status(200).json(data);
    });
}

export function postReport(request, response) {
    const requestBody = request.body;

    if (requestBody == null) {
        response.status(400).json({
            error: "POST request must have a body"
        });
    }

    if (requestBody.constructor.name !== "Object") {
        response.status(400).json({
            error: "request body is not properly formated"
        });
    }

    const newModel = new ReportsModel(requestBody);
    newModel.save((data) => {
        if (data.code) {
            response.status(400).json({
                code: data.errno,
                message: data.sqlMessage,
                serverMessage: data.code
            });
        }
        if (data.id) {
            response.status(201).json(data);
        }

        response.status(503).json(data);
    });
}

export function putReport(request, response) {
    const requestBody = request.body;
    const id = request.params.id;
    
    if (requestBody == null) {
        response.status(400).json({
            error: "PUT request must have a body"
        });
    }

    if (id != Number(id)) {
        response.status(400).json({
            error: "id param must be int"
        });
    }

    if (requestBody.constructor.name !== "Object") {
        response.status(400).json({
            error: "request body is not properly formated"
        });
    }

    const newModel = new ReportsModel(requestBody);
    newModel.findOneAndUpdate(id, (data) => {
        if (data.affectedRows === 1) {
            response.status(204);        
        }

        if (data.affectedRows === 0) {
            response.status(404).json();
        }

        response.status(503).json(data);
    });
}

export function deleteReport(request, response) {
    const id = request.params.id;

    if (id != Number(id)) {
        response.status(400).json({
            error: "id param must be int"
        });
    }

    if (request.body != null) {
        response.status(400).json({
            error: "DELETE request must not have a body"
        });
    }

    model.remove(id, (data) => {
        if (data.affectedRows === 1) {
            response.status(204);        
        }

        if (data.affectedRows === 0) {
            response.status(404).json();
        }

        response.status(503).json(data);
    });
}