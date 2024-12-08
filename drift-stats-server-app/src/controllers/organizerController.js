const Organizer = require("../models/organizer");

exports.getAllOrganizers = async (req, res) => {
  try {
    organizersArray = await Organizer.find({});
    res.json(organizersArray);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis" + error.toString() });
  }
};

exports.createOrganizer = async (req, res) => {
  try {
    const { organizerName, description } = req.body;
    if (!organizerName || !description) {
      res.status(400).json({ error: "Uzpildykite visus laukelius" });
    }
    const organizer = new Organizer({ organizerName, description });
    await organizer.save();
    res.json(organizer);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis" + error.toString() });
  }
};
