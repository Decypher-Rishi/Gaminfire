require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');
const cors = require("cors");

const corsOptions= {
    origin: "http://gaminfire.vercel.app",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credential:true,
}

app.use(cors(corsOptions))

app.use(express.json());

app.use("/api/auth", router);

app.use(errorMiddleware)

// app.get("/", (req,res)=>{
//     res.status(200).send("Welcome Rishi")
// });

// app.get("/register", (req,res)=>{
//     res.status(200).send("Welcome to registration page rishi")
// });


const PORT = 5000

connectDb().then(() => {

    app.listen(PORT, () => {
        console.log("server is running")
    })

})
