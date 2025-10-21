import voterModel from '../models/voter';

async function getAllVoter(req: any, res: any) {
    try {
        const [data] = await voterModel.getAllVoter();

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

async function getAllVoterByNis(req: any, res: any) {
    const searchNis = req.query.nis
    try {
        const [data] = await voterModel.getAllVoterByNis(searchNis);

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

async function getAllVoterByNip(req: any, res: any) {
    const searchNip = req.query.nip
    try {
        const [data] = await voterModel.getAllVoterByNip(searchNip);

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

async function getAllVoterByName(req: any, res: any) {
    const searchName = req.query.name
    try {
        const [data] = await voterModel.getAllVoterByName(searchName);

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

async function createNewNisVoter(req: any, res: any) {
    const {body} = req;

    try {
        await voterModel.createNewNisVoter(body)
        res.json({
            message: 'New voter created successfully',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

async function createNewNipVoter(req: any, res: any) {
    const {body} = req;

    try {
        await voterModel.createNewNipVoter(body)
        res.json({
            message: 'New voter created successfully',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

export default {getAllVoter, getAllVoterByNis, getAllVoterByName, createNewNisVoter, createNewNipVoter, getAllVoterByNip}