import dbPool from "../config/database";

function getAllSiswa() {
    const SQLquery = 'SELECT * FROM siswa'

    return dbPool.execute(SQLquery);
}

function getSiswaByNis(nis: any) {
    const SQLquery = `SELECT * FROM siswa WHERE nis = '${nis}'`;

    return dbPool.execute(SQLquery);
}

function getSiswaByName(name: any) {
    const SQLquery = `SELECT * FROM siswa WHERE nama = '${name}'`;

    return dbPool.execute(SQLquery);
}

export default {getAllSiswa, getSiswaByNis, getSiswaByName}