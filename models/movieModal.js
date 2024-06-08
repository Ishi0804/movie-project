// import mongoose from "mongoose";
const mongoose = require("mongoose");

const moviemodel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  dsc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  }
});

const movie = mongoose.model("movie", moviemodel);

module.exports = movie;
