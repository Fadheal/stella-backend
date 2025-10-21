import express from 'express';

import paslonController from '../controller/paslon'

const router = express.Router()

router.get("/", paslonController.getAllPaslon)

router.get("/:id", paslonController.getPaslonById)

export default router;