const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

//=================CREATE User==================//
exports.createUser = async (req, res, next) => {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newuser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash
    })
    try {
        res.send({ success: true, message: "User create successfull", newuser });
        console.log("User Register successfull");

    } catch (error) {
        next(error);
    }
}

//=================Login==================//

exports.loginUser = async (req, res, next) => {
    const user = await User.findOne({ username: req.body.username });

    try {
        if (!user) {
            res.status(500).json({ success: false, message: "User Not Found" });
        }
        const isPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isPassword) return res.status(400).json({ success: false, message: "Username or password is wrong" });
        const token =  jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, { httpOnly: true }).status(200).json({
            success: true,
            ...otherDetails
        });
    } catch (error) {
        next(error);
    }

}