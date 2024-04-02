const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    otp: {
        type: String,
        requre: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
})

const User = new mongoose.model("User", userSchema)

module.exports = User;