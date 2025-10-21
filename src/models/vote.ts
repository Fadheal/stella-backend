import dbPool from "../config/database";

function getAllVote() {
    const SQLquery = 'SELECT * FROM vote'

    return dbPool.execute(SQLquery);
}

function getAllVoteByPaslon(idPaslon: any) {
    const SQLquery = `SELECT * FROM vote WHERE candidate_selected = ${idPaslon}`;

    return dbPool.execute(SQLquery);
}

function createNewVote(body: any) {
    const SQLquery = `INSERT INTO vote (candidate_selected) VALUES ('${body.selected}')`;

    return dbPool.execute(SQLquery);
}

export default {getAllVote, createNewVote, getAllVoteByPaslon}