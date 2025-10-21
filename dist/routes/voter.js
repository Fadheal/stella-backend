"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const voter_1 = __importDefault(require("../controller/voter"));
const router = express_1.default.Router();
router.get("/", voter_1.default.getAllVoter);
router.get("/nis/", voter_1.default.getAllVoterByNis);
router.get("/nip/", voter_1.default.getAllVoterByNip);
router.get("/name/", voter_1.default.getAllVoterByName);
router.post("/nis", voter_1.default.createNewNisVoter);
router.post("/nip", voter_1.default.createNewNipVoter);
exports.default = router;
