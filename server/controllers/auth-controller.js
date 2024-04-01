const User = require("../models/user-model")

const client = require('twilio')(accountSid, authToken);


const home = async (req, res) => {
    try {
        console.log(req.body)
        res
            .status(200)
            .json({ message: req.body })
    } catch (error) {
        console.log(error)
    }
}
const register = async (req, res) => {
    try {
        console.log(req.body)
        const { username, email, phone } = req.body;
        const userExist = await User.findOne({ email })
        const userExistph = await User.findOne({ phone })
        if (userExist) {
            return res.status(400).json({ msg: "email already exist" })
        }
        else if (userExistph) {
            return res.status(400).json({ msg: "phone already exist" })
        }
        // client.messages
        //     .create({
        //         body: 'hiii',
        //         from: '+13345184035',
        //         to: '+918299559867'
        //     })
        //     .then(messagee => console.log(messagee.sid))
        //     .done();
        const userCreated = await User.create({ username, email, phone })
        res
            .status(200)
            .json({ message: userCreated })
    } catch (error) {
        next(error)
        console.log(error)
    }
}
module.exports = { home, register };