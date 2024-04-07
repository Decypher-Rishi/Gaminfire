const mongoose = require("mongoose");


const URI = "mongodb+srv://Gaminfire:alone1320@gaminfire.ak5f5qa.mongodb.net/"

//mongoose.connect(URI);

const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("connection succssful to DB")
    } catch (error) {
        console.log("database connection failed")
        process.exit(0)
    }
}

module.exports = connectDb
