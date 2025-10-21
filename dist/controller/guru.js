"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const guru_1 = __importDefault(require("../models/guru"));
async function getAllGuru(req, res) {
    try {
        const [data] = await guru_1.default.getAllGuru();
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
async function getAllGuruByNip(req, res) {
    const queryNis = req.query.nip;
    try {
        const [data] = await guru_1.default.getGuruByNip(queryNis);
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
async function getAllGuruByName(req, res) {
    const queryName = req.query.name;
    try {
        const [data] = await guru_1.default.getGuruByName(queryName);
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
exports.default = { getAllGuru, getAllGuruByNip, getAllGuruByName };
