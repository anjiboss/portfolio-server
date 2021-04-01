const express = require("express");
const app = express()

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("You are On Home");
})

app.listen(PORT,() => console.log("Running on "+ PORT))