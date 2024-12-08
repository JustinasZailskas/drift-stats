const express = require("express");
const router = express.Router();
const organizerController = require("../controllers/organizerController");
const corsHandler = require("../middlewares/corsHandler");

router.get("/", corsHandler, organizerController.getAllOrganizers);
router.post("/", corsHandler, organizerController.createOrganizer);

module.exports = router;
