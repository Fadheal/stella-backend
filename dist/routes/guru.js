"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const guru_1 = __importDefault(require("../controller/guru"));
const router = express_1.default.Router();
router.get("/", guru_1.default.getAllGuru);
router.get("/nip/", guru_1.default.getAllGuruByNip);
router.get("/name/", guru_1.default.getAllGuruByName);
exports.default = router;
