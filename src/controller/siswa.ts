import siswaModel from '../models/siswa';

async function getAllSiswa(req: any, res: any) {
    try {
            const [data] = await siswaModel.getAllSiswa();
    
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

async function getSiswaByNis(req: any, res: any) {
    const queryNis = req.query.nis
    try {
            const [data] = await siswaModel.getSiswaByNis(queryNis);
    
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

async function getSiswaByName(req: any, res: any) {
    const queryName = req.query.name
    try {
            const [data] = await siswaModel.getSiswaByName(queryName);
    
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

export default {getAllSiswa, getSiswaByNis, getSiswaByName}