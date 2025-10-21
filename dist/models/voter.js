"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
function getAllVoter() {
    const SQLquery = 'SELECT * FROM voter';
    return database_1.default.execute(SQLquery);
}
function getAllVoterByNis(field) {
    const SQLquery = `SELECT * FROM voter WHERE nis = '${field}'`;
    return database_1.default.execute(SQLquery);
}
function getAllVoterByNip(field) {
    const SQLquery = `SELECT * FROM voter WHERE nip = '${field}'`;
    return database_1.default.execute(SQLquery);
}
function getAllVoterByName(field) {
    const SQLquery = `SELECT * FROM voter WHERE name = '${field}'`;
    return database_1.default.execute(SQLquery);
}
function createNewNisVoter(body) {
    const SQLquery = `INSERT INTO voter (name, nis) VALUES ('${body.name}', '${body.nis}')`;
    return database_1.default.execute(SQLquery);
}
function createNewNipVoter(body) {
    const SQLquery = `INSERT INTO voter (name, nip) VALUES ('${body.name}', '${body.nip}')`;
    return database_1.default.execute(SQLquery);
}
exports.default = { getAllVoter, getAllVoterByNis, getAllVoterByName, createNewNisVoter, createNewNipVoter, getAllVoterByNip };
