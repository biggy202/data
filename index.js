import { log } from "console";
import express from "express";
import dogs from "dogs";
import cors from "cors"
import mongoose from "mongoose";
const app = express();

app.use()

const allData =[...dogs]

app.get("/", (req, res) => {
  res.send([])
})

app.listen(4000, async () => 
  console.log("server is running in port 4000")
  
);
