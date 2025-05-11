import express from "express";

import dotenv from "dotenv";

import cors from "cors";

import db from "./utils/db.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Cohort!");
});

app.get("/devender", (req, res) => {
  res.send({
    username: "username",
    age: 22,
  });
});

db();

app.listen(port, () => console.log("Server is listening at port", port));
