"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const voter_1 = __importDefault(require("../models/voter"));
async function getAllVoter(req, res) {
    try {
        const [data] = await voter_1.default.getAllVoter();
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
async function getAllVoterByNis(req, res) {
    const searchNis = req.query.nis;
    try {
        const [data] = await voter_1.default.getAllVoterByNis(searchNis);
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
async function getAllVoterByNip(req, res) {
    const searchNip = req.query.nip;
    try {
        const [data] = await voter_1.default.getAllVoterByNip(searchNip);
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
async function getAllVoterByName(req, res) {
    const searchName = req.query.name;
    try {
        const [data] = await voter_1.default.getAllVoterByName(searchName);
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
async function createNewNisVoter(req, res) {
    const { body } = req;
    try {
        await voter_1.default.createNewNisVoter(body);
        res.json({
            message: 'New voter created successfully',
            data: body,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}
async function createNewNipVoter(req, res) {
    const { body } = req;
    try {
        await voter_1.default.createNewNipVoter(body);
        res.json({
            message: 'New voter created successfully',
            data: body,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}
exports.default = { getAllVoter, getAllVoterByNis, getAllVoterByName, createNewNisVoter, createNewNipVoter, getAllVoterByNip };
