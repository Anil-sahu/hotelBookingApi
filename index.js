const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const hotelRoute = require("./routes/hotel");
const roomRoute = require("./routes/room");

const cookieParser = require("cookie-parser");
const app = express();
dotenv.config();



const dbconnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("connection successful");
    } catch (error) {
        console.log(error);

    }
}

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected");
});
mongoose.connection.on("connection", () => {
    console.log("Connected");
});


app.use(cookieParser());
app.use(express.json());
// middleware
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute)
app.use('/api/v1/room', roomRoute);
app.use('/api/v1/hotel', hotelRoute);


app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})

var port = process.env.PORT || 3000;
app.listen(port, () => {
    dbconnection();
    console.log("Hello my server is running at " + port);
})