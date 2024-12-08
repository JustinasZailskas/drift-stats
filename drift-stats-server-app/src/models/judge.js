const mongoose = require("mongoose");

const judgeSchema = new mongoose.Schema({
  fullname: { firstname: String, lastname: String },
  nationality: {
    countryName: String,
    shortCountryName: String,
  },
});

const judge = mongoose.model("Judge", judgeSchema, "judge");

module.exports = judge;
