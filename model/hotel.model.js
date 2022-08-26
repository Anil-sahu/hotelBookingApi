const mongoose = require("mongoose");
const Schema = mongoose;
const hotelSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true,
    },
    distance: {
        type: String,
        require: true
    },
    photo: {
        type: [String]
    },
    disc: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        require: true,
    },
    featured: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Hotel", hotelSchema);