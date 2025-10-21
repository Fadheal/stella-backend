function logRequest(req: any, res: any, next: any) {
    console.log('Terjadi request ke PATH : ', req.path)
    next()
}

export default logRequest