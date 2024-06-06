import { log } from "console";
import express from "express";
import dogs from "dogs";
import cors from "cors"
const app = express();

app.use()

const allData =[...dogs]

app.get("/", (req, res) => {
  res.send([])
})

app.listen(4000, () =>
  console.log("server is running in port 4000")
);
