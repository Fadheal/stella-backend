import express from 'express';

import siswaController from '../controller/siswa'

const router = express.Router()

router.get("/", siswaController.getAllSiswa)

router.get("/nis/", siswaController.getSiswaByNis)

router.get("/name/", siswaController.getSiswaByName)

export default router;