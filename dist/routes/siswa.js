"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const siswa_1 = __importDefault(require("../controller/siswa"));
const router = express_1.default.Router();
router.get("/", siswa_1.default.getAllSiswa);
router.get("/nis/", siswa_1.default.getSiswaByNis);
router.get("/name/", siswa_1.default.getSiswaByName);
exports.default = router;
