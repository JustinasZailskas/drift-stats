const mongoose = require("mongoose");

const organizerSchema = new mongoose.Schema({
  organizerName: { type: "string", required: true },
  description: { type: "string", required: true },
});

const organizer = mongoose.model("Organizer", organizerSchema, "organizer");

module.exports = organizer;
