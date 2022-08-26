const express = require("express");
const { createHotel, getAllHotel, getHotelById, deleteHotel, updateHotel } = require("../controller/hotel.controller");
const Hotel = require("../model/hotel.model");
const router = express.Router();

// CREATE
router.post("/",createHotel);

//------------------Get hotel by id-------------------------------

router.get("/:id", getHotelById)

//------------------------get All hotel-------------------------------

router.get("/",getAllHotel)

//Delete

router.delete("/:id", deleteHotel);

//-------------update existing hotel detail-----------

router.put("/:id",updateHotel)


module.exports = router;