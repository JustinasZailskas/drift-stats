const express = require("express");
const router = express.Router();
const seasonController = require("../controllers/seasonController");
const corsHandler = require("../middlewares/corsHandler");

router.get("/", corsHandler, seasonController.getAllSeasons);
router.post("/", corsHandler, seasonController.createSeason);

module.exports = router;
