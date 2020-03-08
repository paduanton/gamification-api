import DatabaseModel from './database'
export class ReportModel extends DatabaseModel {

    constructor(object) {
        this[userId] = object.userId;
        this[post] = object.post;
        this[helpful] = object.helpful;
        this[description] = object.description;
        this[approved] = object.approved;
        this[table] = 'reports';
    }

    constructor() {

    }

    save = () => {

    }

    find = () => {

    }

    findById = () => {

    }

    findOneAndUpdate = () => {

    }

    remove = () => {

    }
}