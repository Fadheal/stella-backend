"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vote_1 = __importDefault(require("../models/vote"));
async function getAllVote(req, res) {
    try {
        const [data] = await vote_1.default.getAllVote();
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
async function getAllVoteByPaslon(req, res) {
    const { idPaslon } = req.params;
    try {
        const [data] = await vote_1.default.getAllVoteByPaslon(idPaslon);
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
async function createNewVote(req, res) {
    const { body } = req;
    try {
        if (body.selected <= 3) {
            await vote_1.default.createNewVote(body);
            res.json({
                message: 'New vote created successfully',
                data: body,
            });
        }
        else {
            res.status(400).json({
                message: 'Bad Request, Max paslon is 3',
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
}
exports.default = { getAllVote, getAllVoteByPaslon, createNewVote };
