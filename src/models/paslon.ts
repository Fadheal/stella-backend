import dbPool from "../config/database";

function getAllPaslon() {
    const SQLquery = 'SELECT * FROM data_paslon'

    return dbPool.execute(SQLquery);
}

function getPaslonById(id: any) {
    const SQLquery = `SELECT * FROM data_paslon WHERE paslon = ${id}`

    return dbPool.execute(SQLquery);
}

export default {getAllPaslon, getPaslonById}