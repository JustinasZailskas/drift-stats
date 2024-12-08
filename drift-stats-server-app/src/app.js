"use strict";

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRouter = require("./routes/authRoutes");
const leagueRouter = require("./routes/leagueRoutes");
const seasonRouter = require("./routes/seasonRoutes");
const organizerRoutes = require("./routes/organizerRoutes");
const judgeRoutes = require("./routes/judgeRoutes");
const League = require("./models/league");
const corsHandler = require("./middlewares/corsHandler");
const connectToDatabase = require("./services/database");

connectToDatabase();
app.use(corsHandler);
app.use(express.json()); //Kodel si kodo eilute turi buti iterpta?
app.use("/", authRouter);
app.use("/league", leagueRouter);
app.use("/season", seasonRouter);
app.use("/organizer", organizerRoutes);
app.use("/judge", judgeRoutes);

// 404 klaidos tvarkymas neapibrėžtiems maršrutams
app.use((req, res) => {
  res.status(404).json({ error: "Puslapis nerastas" });
});
const port = process.env.PORT || 3000;
// Paleiskite serverį po sėkmingo prisijungimo prie duomenų bazės
mongoose.connection.once("open", () => {
  app.listen(port, () => {
    console.log(`Serveris veikia ant ${port} porto`);
  });
});
