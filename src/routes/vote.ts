import express from 'express';

import voteController from '../controller/vote'

const router = express.Router()

router.get("/", voteController.getAllVote)

router.get("/:idPaslon", voteController.getAllVoteByPaslon)

router.post("/", voteController.createNewVote)

export default router;