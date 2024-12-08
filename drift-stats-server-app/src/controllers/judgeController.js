const Judge = require("../models/judge");

exports.getAllJudges = async (req, res) => {
  try {
    judgesArray = await Judge.save();
    res.json(judgesArray);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis" + error.toString() });
  }
};

exports.createJudge = async (req, res) => {
  try {
    const { fullname, nationality } = req.body;
    if (
      !fullname.firstname ||
      !fullname.lastname ||
      !nationality.countryName ||
      !nationality.shortCountryName
    ) {
      res.status(400).json({ error: "Uzpildykite visus laukelius" });
    }
    const judge = new Judge({
      fullname: fullname,
      nationality: nationality,
    });
    await judge.save();
    res.json(judge);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis" + error.toString() });
  }
};
