const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const uri = "mongodb://localhost/driftApp";
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Prisijungta prie duomenu bazes");
  } catch (error) {
    console.error("Klaida jungianties prie MongoDB");
    process.exit(1);
  }
};

module.exports = connectToDatabase;
