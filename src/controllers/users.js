import UsersModel from '../models/users'

const model = new UsersModel();

export function getUser(request, response) {
    const id = request.params.id;

    if (id != Number(id)) {
        return response.status(400).json({
            error: "id param must be int"
        });
    }

    if (Object.keys(request.body).length !== 0) {
        return response.status(400).json({
            error: "GET request must not have a body"
        });
    }

    model.findById(id, (data) => {
        if (!data) {
            return response.status(404).json({});
        }
        return response.status(200).json(data);
    });
}

export function postUser(request, response) {
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

    const newModel = new UsersModel(requestBody);
    newModel.save((data) => {
        if(!data) {
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