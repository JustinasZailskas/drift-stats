const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Iveskite el. pasta arba slaptazodi" });
  }
  try {
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordCorrect) {
      return res
        .status(401)
        .json({ error: "Neteisingi prisijungimo duomenys" });
    }
    const token = jwt.sign({ userID: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    user.token = token;
    await user.save();
    res.status(200).json({ token });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Autentifikavimo klaida: " + error.toString() });
  }
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Iveskite el. pasta arba slaptazodi" });
  }
  try {
    const isUserExist = await User.findOne({
      email: email,
    });
    if (isUserExist) {
      return res
        .status(400)
        .json({ status: 400, message: "Email all ready in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email: email,
      password: hashedPassword,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis" + error.toString() });
  }
};
