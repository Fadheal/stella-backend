"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
function getAllGuru() {
    const SQLquery = 'SELECT * FROM guru';
    return database_1.default.execute(SQLquery);
}
function getGuruByNip(nip) {
    const SQLquery = `SELECT * FROM guru WHERE nip = '${nip}'`;
    return database_1.default.execute(SQLquery);
}
function getGuruByName(name) {
    const SQLquery = `SELECT * FROM guru WHERE name = '${name}'`;
    return database_1.default.execute(SQLquery);
}
exports.default = { getAllGuru, getGuruByNip, getGuruByName };
