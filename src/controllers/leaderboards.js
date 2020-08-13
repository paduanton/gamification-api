import LeaderboardsModel from '../models/leaderboards'

const model = new LeaderboardsModel();

export function getUsersScore(request, response) {
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

export async function updateUsersLeaderboards(usersId, score) {
    return new Promise(async (resolve, reject) => {
        model.findByGenericKey({ users_id: usersId }, (data) => {
            if (data) {
                const oldScore = data.total_score;
                const newScore = oldScore + score;

                const leaderboards = {
                    total_score: newScore
                };

                const newModel = new LeaderboardsModel(leaderboards);
                newModel.findOneAndUpdate(data.id, (data) => {
                    if (!data) {
                        throw ("Could not update leaderboards");
                    }
                });

                return resolve(data)
            }

            return reject(data)
        });
    });

}