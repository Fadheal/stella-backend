"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
function getAllVote() {
    const SQLquery = 'SELECT * FROM vote';
    return database_1.default.execute(SQLquery);
}
function getAllVoteByPaslon(idPaslon) {
    const SQLquery = `SELECT * FROM vote WHERE candidate_selected = ${idPaslon}`;
    return database_1.default.execute(SQLquery);
}
function createNewVote(body) {
    const SQLquery = `INSERT INTO vote (candidate_selected) VALUES ('${body.selected}')`;
    return database_1.default.execute(SQLquery);
}
exports.default = { getAllVote, createNewVote, getAllVoteByPaslon };
