"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vote_1 = __importDefault(require("../controller/vote"));
const router = express_1.default.Router();
router.get("/", vote_1.default.getAllVote);
router.get("/:idPaslon", vote_1.default.getAllVoteByPaslon);
router.post("/", vote_1.default.createNewVote);
exports.default = router;
