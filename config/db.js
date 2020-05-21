const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/pagination", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
