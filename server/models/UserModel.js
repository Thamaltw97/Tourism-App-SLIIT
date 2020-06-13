const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique:true
    },

    password: {
        type: String,
        required: true,
        minlength:5
    },

    mobile: {
        type: String,
        minlength: 10,
        maxlength: 10
    },

    country: {
        type: String,
        required: true,
        minlength: 3
    },

    userRole: {
        type:String,
        default:'user'
    },

});

module.exports = mongoose.model("Users", userSchema);