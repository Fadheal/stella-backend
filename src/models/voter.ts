import dbPool from "../config/database";

function getAllVoter() {
    const SQLquery = 'SELECT * FROM voter'

    return dbPool.execute(SQLquery);
}

function getAllVoterByNis(field: any) {
    const SQLquery = `SELECT * FROM voter WHERE nis = '${field}'`;

    return dbPool.execute(SQLquery);
}

function getAllVoterByNip(field: any) {
    const SQLquery = `SELECT * FROM voter WHERE nip = '${field}'`;

    return dbPool.execute(SQLquery);
}

function getAllVoterByName(field: any) {
    const SQLquery = `SELECT * FROM voter WHERE name = '${field}'`;

    return dbPool.execute(SQLquery);
}


function createNewNisVoter(body: any) {
    const SQLquery = `INSERT INTO voter (name, nis) VALUES ('${body.name}', '${body.nis}')`;

    return dbPool.execute(SQLquery);
}

function createNewNipVoter(body: any) {
    const SQLquery = `INSERT INTO voter (name, nip) VALUES ('${body.name}', '${body.nip}')`;

    return dbPool.execute(SQLquery);
}


export default {getAllVoter, getAllVoterByNis, getAllVoterByName, createNewNisVoter, createNewNipVoter, getAllVoterByNip}