"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
function getAllPaslon() {
    const SQLquery = 'SELECT * FROM data_paslon';
    return database_1.default.execute(SQLquery);
}
function getPaslonById(id) {
    const SQLquery = `SELECT * FROM data_paslon WHERE paslon = ${id}`;
    return database_1.default.execute(SQLquery);
}
exports.default = { getAllPaslon, getPaslonById };
