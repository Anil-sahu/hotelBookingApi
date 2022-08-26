const mongoose = require("mongoose");
const Schema = mongoose;
const roomSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    maxPeople: {
        type: Number,
        require: true,
    },
    disc: {
        type: String,
        require: true
    },

    roomNumber: {
        type: [{ number: Number, unavailabelDates: { type: [Date] } }],

    },


});

module.exports = mongoose.model("Room", roomSchema);