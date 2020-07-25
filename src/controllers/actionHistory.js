import ActionHistoryModel from '../models/actionHistory'

const model = new ActionHistoryModel();

export function getUsersActionHistory(request, response) {
    const usersId = request.params.usersId;

    if (usersId != Number(usersId)) {
        return response.status(400).json({
            error: "id param must be int"
        });
    }

    if (Object.keys(request.body).length !== 0) {
        return response.status(400).json({
            error: "GET request must not have a body"
        });
    }

    model.findByGenericKey({ users_id: usersId }, (data) => {
        if (!data) {
            return response.status(404).json({});
        }
        return response.status(200).json(data);
    });
}

export async function setUserActionHistory(request, description, type, usersId) {
    const remoteAddress = (request.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
        request.connection.remoteAddress ||
        request.socket.remoteAddress ||
        request.connection.socket.remoteAddress;
    const remotePort = request.connection.remotePort;
    const remoteBrowser = request.get('User-Agent');

    const actionHistoryObject = {
        users_id: usersId,
        type: type,
        description: description,
        ip: remoteAddress + ':' + remotePort,
        browser: remoteBrowser
    }

    const newModel = new ActionHistoryModel(actionHistoryObject)
    return new Promise(async (resolve, reject) => {
        newModel.save((data) => {
            if (data) {
                return resolve(data)
            }

            return reject(data)
        });
    });

}