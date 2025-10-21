"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//route
const vote_1 = __importDefault(require("./routes/vote"));
const voter_1 = __importDefault(require("./routes/voter"));
const paslon_1 = __importDefault(require("./routes/paslon"));
const siswa_1 = __importDefault(require("./routes/siswa"));
const guru_1 = __importDefault(require("./routes/guru"));
//middleware
const logs_1 = __importDefault(require("./middleware/logs"));
const apiAuth_1 = __importDefault(require("./middleware/apiAuth"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
const server = http_1.default.createServer(app);
app.use(logs_1.default);
app.use(apiAuth_1.default);
app.use(express_1.default.json());
const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
app.use('/votes', vote_1.default);
app.use('/voter', voter_1.default);
app.use('/paslon', paslon_1.default);
app.use('/siswa', siswa_1.default);
app.use('/guru', guru_1.default);
app.get("/", (req, res, next) => {
    res.send("Hii. im twoxnite");
});
