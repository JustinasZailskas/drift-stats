const mongoose = require("mongoose");

const raceSchema = new mongoose.Schema({
  raceTitle: { type: "string", required: true },
  raceDate: { type: "string", required: true },
  city: { type: "string", required: true },
  seasonID: { type: "string", required: true },
  judges: [{ type: mongoose.Schema.Types.ObjectId, ref: "judge" }],
  organizerID: { type: mongoose.Schema.Types.ObjectId, ref: "organizer" },
});

const race = mongoose.model("Race", raceSchema, "race");

module.exports = race;
