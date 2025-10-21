import express from 'express';

import guruController from '../controller/guru'

const router = express.Router()

router.get("/", guruController.getAllGuru)

router.get("/nip/", guruController.getAllGuruByNip)

router.get("/name/", guruController.getAllGuruByName)

export default router;