const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  permissions: [
    {
      type: String,
    },
  ],
});

const user = mongoose.model("User", userSchema, "users");

module.exports = user;
