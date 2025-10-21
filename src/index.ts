import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import crypto from 'crypto';
dotenv.config()

//route
import voteRouter from './routes/vote';
import voterRouter from './routes/voter';
import paslonRouter from './routes/paslon';
import siswaRouter from './routes/siswa';
import guruRouter from './routes/guru';

//middleware
import middlewareLogRequest from './middleware/logs';
import middlewareApiAuth from './middleware/apiAuth';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

app.use(middlewareLogRequest);
app.use(middlewareApiAuth);
app.use(express.json());

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})

app.use('/votes', voteRouter)
app.use('/voter', voterRouter)
app.use('/paslon', paslonRouter)
app.use('/siswa', siswaRouter)
app.use('/guru', guruRouter)

app.get("/", (req, res, next) => {
    res.send("Hii. im twoxnite")
})