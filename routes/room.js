const express = require("express");
const { getAllRoom, getRoomById, updateRoom, deleteRoom, createRoom } = require("../controller/room.controller");
const router = express.Router();


router.get("/", getAllRoom);
router.get("/:id", getRoomById);
router.put("/:id", updateRoom);
router.delete("/:id", deleteRoom);
router.post("/", createRoom)
module.exports = router;