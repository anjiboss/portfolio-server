const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  text: String,
});

module.exports = mongoose.model("Contact", contactSchema);
