import guruModel from '../models/guru';

async function getAllGuru(req: any, res: any) {
    try {
            const [data] = await guruModel.getAllGuru();
    
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

async function getAllGuruByNip(req: any, res: any) {
    const queryNis = req.query.nip
    try {
            const [data] = await guruModel.getGuruByNip(queryNis);
    
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

async function getAllGuruByName(req: any, res: any) {
    const queryName = req.query.name
    try {
            const [data] = await guruModel.getGuruByName(queryName);
    
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

export default {getAllGuru, getAllGuruByNip, getAllGuruByName}