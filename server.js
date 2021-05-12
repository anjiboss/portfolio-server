require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const sendMail = require("./utils/sendMail");
let contactCount = 0;

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("You not suppose to request like this ;>");
});

app.get("/kidoshitekure", (req, res) => {
  res.send("sever started");
});

app.post("/api/contact", async (req, res) => {
  contactCount++;
  sendMail(req.body.name, req.body.text, () => {
    res.status(200).send("done");
  });
});

const server = app.listen(PORT, () => console.log("Running on " + PORT));
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(process.exit(1));
});
