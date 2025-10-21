"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logRequest(req, res, next) {
    console.log('Terjadi request ke PATH : ', req.path);
    next();
}
exports.default = logRequest;
