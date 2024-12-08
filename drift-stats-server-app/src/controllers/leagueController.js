const League = require("../models/league");

exports.getAllLeagues = async (req, res) => {
  try {
    const leaguesArray = await League.find({});
    res.json(leaguesArray);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
};

exports.createLeague = async (req, res) => {
  try {
    const { leagueTitle } = req.body;
    if (!leagueTitle) {
      res
        .status(400)
        .json({ error: "Nurodykite lygos pavadinima" + error.toString() });
    }
    const league = new League({ leagueTitle });
    await league.save();
    res.json(league);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.toString() });
  }
};
