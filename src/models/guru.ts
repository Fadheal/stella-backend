import dbPool from "../config/database";

function getAllGuru() {
    const SQLquery = 'SELECT * FROM guru'

    return dbPool.execute(SQLquery);
}

function getGuruByNip(nip: any) {
    const SQLquery = `SELECT * FROM guru WHERE nip = '${nip}'`;

    return dbPool.execute(SQLquery);
}

function getGuruByName(name: any) {
    const SQLquery = `SELECT * FROM guru WHERE name = '${name}'`;

    return dbPool.execute(SQLquery);
}

export default {getAllGuru, getGuruByNip, getGuruByName}