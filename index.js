import express from "express";
import dogs from "./dogs.js";
import Cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(Cors({ origin: "*" }));

const allData = [...dogs];

app.get("/", (req, res) => {
  res.send(allData);
});

app.listen(4000, () => {
  console.log("server is running in port 4000");
});
