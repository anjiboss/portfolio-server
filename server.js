const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("You are On Home");
});

app.get("/api/img", (req, res) => {
  res.sendFile(path.join(__dirname, "image", "portfolioIMG.png"));
});

const server = app.listen(PORT, () => console.log("Running on " + PORT));
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(process.exit(1));
});
