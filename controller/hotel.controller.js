const Hotel = require("../model/hotel.model");


//====================CREATE NEW HOTEL==============================//
exports.createHotel = async (req, res) => {
    const newHotel = await Hotel.create(req.body);
    try {
        res.status(200).json({ success: true, newHotel });
    } catch (error) {
        throw res.status(500).json({ success: false, message: error });

    }
}


//====================GET ALL HOTEL==============================//
exports.getAllHotel = async (req, res) => {
    const hotel = await Hotel.find();
    try {
        res.status(200).json({ success: true, hotel });
    } catch (error) {
        throw res.status(500).json({ success: false, message: error });
    }
}


//====================GET HOTEL==============================//

exports.getHotelById = async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);
    try {
        if (!hotel) {
            return res.status(404).send({ success: false, message: "Not Found" });
        }
        res.status(200).send({ success: true, hotel });

    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
}



//====================DELETE HOTEL==============================//
exports.deleteHotel = async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);

    try {
        if (!hotel) {
            res.status(500).json({ success: false, message: "Hotel is Not Found" });
        } else {
            await hotel.remove();
            res.status(200).json({ success: true, message: "Delete successfull" });
        }

    } catch (error) {
        throw res.json({ success: false, message: error });
 }
}


//====================UPDATE HOTEL==============================//

exports.updateHotel = async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);

    try {
        if (!hotel) {
            return res.status(500).json({
                success: false,
                message: "Not Found"
            });
        } else {
            hotel = await Hotel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
                new: true,
            });
            return res.status(200).json({ success: true, hotel })
        }
    } catch (error) {

    }
}