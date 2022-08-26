const User = require("../model/user.model");
const bcrypt = require("bcryptjs");

//=================Get All User==================//
exports.getAllUser = async (req, res, next) => {
    const users = await User.find();

    try {
        res.status(200).json({ success: true, users });
    } catch (error) {
        next(error)
    }

}

//=================Get All User==================//



//=================Get User==================//
exports.getUserById = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    try {
        res.status(200).json({ success: true, user })
    } catch (error) {
        next(error);

    }
}

//=================Get All User==================//
exports.updateUser = async (req, res) => {
    const user = await User.findById(req.params.id);

    try {
        if (!user) {
            return res.status(500).json({ success: false, message: "Not Found" });
        }
        user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
            new: true
        });
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({ success: true, message: error });
    }


}

