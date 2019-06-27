"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var RoomBookingsSchema = new mongoose_1.Schema({
    date_booking_from: {
        type: Date,
        default: Date.now,
        required: true,
    },
    date_booking_to: {
        type: Date,
        default: Date.now,
        required: true,
    },
    room_count: {
        type: Number,
    },
    max_occupancy: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});
exports.RoomBookings = mongoose_1.model('RoomBookings', RoomBookingsSchema);
