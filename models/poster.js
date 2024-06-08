const mongoose = require("mongoose");

const posterModel = new mongoose.Schema({
    img:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    movieType:{
        type: String,
        required: true
    },
    dsc:{
        type: String,
        required:true
    }
})

const poster = mongoose.model("poster",posterModel);

module.exports = poster;