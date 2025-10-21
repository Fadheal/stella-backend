"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apiAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader == process.env.API_KEY) {
        next();
    }
    else {
        res.json({
            message: "Invalid or Expired TOKEN. Percaya deh ini ga guna kalo ga ada token"
        });
    }
}
;
exports.default = apiAuth;
