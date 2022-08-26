const express = require("express");
const { createUser, loginUser } = require("../controller/auth.controller");
const { verifyToken } = require("../utils/verifyTokens");

const router = express.Router();



router.post("/signUp", createUser);
router.get("/signIn", loginUser);
router.get("/checkAuthentication",verifyToken,(req,res,next)=>{
    res.send("You are authenticated successfully");
})


// router.post("/signIn", createUser)
module.exports = router;