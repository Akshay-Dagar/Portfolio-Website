import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import * as path from 'path';

const app = express();
const root = path.join('../', 'client', 'build')
app.use(express.static(root));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.get("/api", (req, res) => res.send("Hello from portfolio's api!!!"));
app.get("*", (req, res) => res.sendFile(path.join('index.html'), {root}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
