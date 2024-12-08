const Season = require("../models/season");

exports.getAllSeasons = async (req, res) => {
  try {
    const seasonsArray = await Season.find({});
    res.json(seasonsArray);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
};

exports.createSeason = async (req, res) => {
  try {
    const { seasonTitle, seasonYear, leagueID } = req.body;
    if (!seasonTitle || !seasonYear || !leagueID) {
      res
        .status(400)
        .json({ error: "Uzpildykite visus laukelius" + error.toString() });
    }
    const season = new Season({ seasonTitle, seasonYear, leagueID });
    await season.save();
    res.json(season);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
};
