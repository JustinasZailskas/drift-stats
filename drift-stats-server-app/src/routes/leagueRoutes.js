const express = require("express");
const router = express.Router();
const leagueController = require("../controllers/leagueController");
const corsHandler = require("../middlewares/corsHandler");

router.get("/", corsHandler, leagueController.getAllLeagues);
router.post("/", corsHandler, leagueController.createLeague);

module.exports = router;
