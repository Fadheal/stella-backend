import paslonModel from '../models/paslon';

async function getAllPaslon(req: any, res: any) {
    try {
        const [data] = await paslonModel.getAllPaslon();

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

async function getPaslonById(req: any, res: any) {
    const {id} = req.params;

    try {
        const [data] = await paslonModel.getPaslonById(id);

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
export default {getAllPaslon, getPaslonById};