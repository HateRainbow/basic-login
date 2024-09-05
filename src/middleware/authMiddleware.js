/* eslint-disable no-unused-vars */
import express from "express";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {});

app.get("/login", (req, res) => {});

app.get("/signup", (req, res) => {});
