const express = require("express");
const { getAllUser, getUserById, updateUser } = require("../controller/user.controller");
const { route } = require("./auth");
const router = express.Router();

router.get("/", getAllUser);

router.get("/:id", getUserById);
router.put("/:id", updateUser);




module.exports = router;