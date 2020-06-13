const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 3
    },

    noOfDays: {
        type: Number,
        required: true,
        min: 1
    },

    noOfPeople: {
        type: Number,
        required: true,
        min: 1
    },

    remarks: {
        type: String
    },

    packUserId: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model("Packages", packageSchema);