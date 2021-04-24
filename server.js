require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("You are On Home");
});

app.post("/api/contact", (req, res) => {
  console.log(req.body);
  res.status(200).send("done");
});

const server = app.listen(PORT, () => console.log("Running on " + PORT));
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(process.exit(1));
});
