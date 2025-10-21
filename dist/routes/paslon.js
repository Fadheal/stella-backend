"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paslon_1 = __importDefault(require("../controller/paslon"));
const router = express_1.default.Router();
router.get("/", paslon_1.default.getAllPaslon);
router.get("/:id", paslon_1.default.getPaslonById);
exports.default = router;
