"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paslon_1 = __importDefault(require("../models/paslon"));
async function getAllPaslon(req, res) {
    try {
        const [data] = await paslon_1.default.getAllPaslon();
        res.status(200).json({
            message: 'success',
            data: data,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}
async function getPaslonById(req, res) {
    const { id } = req.params;
    try {
        const [data] = await paslon_1.default.getPaslonById(id);
        res.status(200).json({
            message: 'success',
            data: data,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}
exports.default = { getAllPaslon, getPaslonById };
