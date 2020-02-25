export class Report {

    constructor(userId, post, helpful, description, approved) {
        this[userId] = userId;
        this[post] = post;
        this[helpful] = helpful;
        this[description] = description;
        this[approved] = approved;
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