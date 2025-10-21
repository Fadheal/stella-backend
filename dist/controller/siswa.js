"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const siswa_1 = __importDefault(require("../models/siswa"));
async function getAllSiswa(req, res) {
    try {
        const [data] = await siswa_1.default.getAllSiswa();
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
async function getSiswaByNis(req, res) {
    const queryNis = req.query.nis;
    try {
        const [data] = await siswa_1.default.getSiswaByNis(queryNis);
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
async function getSiswaByName(req, res) {
    const queryName = req.query.name;
    try {
        const [data] = await siswa_1.default.getSiswaByName(queryName);
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
exports.default = { getAllSiswa, getSiswaByNis, getSiswaByName };
