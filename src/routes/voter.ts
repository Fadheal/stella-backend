import express from 'express';

import voteController from '../controller/voter'

const router = express.Router()

router.get("/", voteController.getAllVoter)

router.get("/nis/", voteController.getAllVoterByNis)

router.get("/nip/", voteController.getAllVoterByNip)

router.get("/name/", voteController.getAllVoterByName)

router.post("/nis", voteController.createNewNisVoter)

router.post("/nip", voteController.createNewNipVoter)

export default router;