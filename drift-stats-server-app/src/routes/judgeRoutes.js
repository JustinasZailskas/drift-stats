const express = require("express");
const router = express.Router();
const judgeController = require("../controllers/judgeController");
const corsHandler = require("../middlewares/corsHandler");

router.get("/", corsHandler, judgeController.getAllJudges);
router.post("/", corsHandler, judgeController.createJudge);

module.exports = router;
