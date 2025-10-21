"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
function getAllSiswa() {
    const SQLquery = 'SELECT * FROM siswa';
    return database_1.default.execute(SQLquery);
}
function getSiswaByNis(nis) {
    const SQLquery = `SELECT * FROM siswa WHERE nis = '${nis}'`;
    return database_1.default.execute(SQLquery);
}
function getSiswaByName(name) {
    const SQLquery = `SELECT * FROM siswa WHERE nama = '${name}'`;
    return database_1.default.execute(SQLquery);
}
exports.default = { getAllSiswa, getSiswaByNis, getSiswaByName };
