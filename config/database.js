const mongoose = require("mongoose")

const database = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://blackmask8866:12345@cluster0.5joc2xu.mongodb.net/Movie"
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = database;
