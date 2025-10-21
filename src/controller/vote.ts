import voteModel from '../models/vote';

async function getAllVote(req: any, res: any) {
    try {
        const [data] = await voteModel.getAllVote();

        res.status(200).json({
            message: 'success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

async function getAllVoteByPaslon(req: any, res: any) {
    const {idPaslon} = req.params;
    try {
        const [data] = await voteModel.getAllVoteByPaslon(idPaslon);

        res.status(200).json({
            message: 'success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

async function createNewVote(req: any, res: any) {
    const {body} = req;

    try {
        if (body.selected <= 3) {
            await voteModel.createNewVote(body)
            res.json({
                message: 'New vote created successfully',
                data: body,
            })
        } else {
            res.status(400).json({
                message: 'Bad Request, Max paslon is 3',
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

export default {getAllVote, getAllVoteByPaslon, createNewVote}