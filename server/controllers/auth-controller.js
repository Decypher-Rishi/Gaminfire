const User = require("../models/user-model")
// const userVerify = require("../models/verify-model")
// const accountSid = 'ACef9816c993da3b2e7e6d62700ec53653';
// const authToken = '13e688a26791238ca9d4fb04a6fed0ba';
// const client = require('twilio')(accountSid, authToken);
// const twilioPhoneNumber = '+13345184035';

let digits = "0123456789";
OTP = "";
for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
}

// function sendOTP(phoneNumber, otp) {
//     return client.messages.create({
//         body: `Your OTP is: ${otp}`,
//         to: `+91${phoneNumber}`,
//         from: twilioPhoneNumber
//     });
// }

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
            return res.status(400).json({ message: "email already exist" })
        }
        else if (userExistph) {
            return res.status(400).json({ message: "phone already exist" })
        }
        // await sendOTP(phone, OTP);

        console.log(OTP)
        const userData = new User({
            username: username,
            email: email,
            phone: phone,
            otp: OTP
        })
        //  const userCreated = await User.create({ username, email, phone })
        //  res
        //      .status(200)
        //      .json({ message: userCreated })


        //    client.messages
        //         .create({
        //             body: `${username} your verification Otp is ${OTP}`,
        //             from: '+13345184035',
        //             to: '+918299559867'
        //         })
        //         .then(messagee => console.log(messagee.sid))
        //         .done();
        const userCreated = await User.create(userData)
        res
            .status(200)
            .json({ message: "Your Unique GaminFire code will be sent to you in 24 hours"})
    } catch (error) {
        // next(error)
        console.log(error)
    }
}
// const verify = async (req, res) => {
//     try {

//         const user = await User.findOne({
//             phoneNumber: req.body.phoneNumber,
//             otp: req.body.otp
//         });

//         if (!user) {
//             return res.status(400).json({ error: 'Invalid OTP' });
//         }
//         user.isVerified = true;
//         await user.save();
//         return res.status(200).json({ message: 'verified' });
//     }
//     catch (error) {
//         next(error)
//         console.log(error)
//     }
// }
module.exports = { home, register };