"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var RoomBookingsSchema = new mongoose_1.Schema({
    bookings: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Bookings',
        autopopulate: { select: '-_id -createdAt -updatedAt' },
    },
    room_count: {
        type: Number,
    },
    max_occupancy: {
        type: Number,
        required: true,
    },
    guest: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Guest',
        autopopulate: { select: '-_id -createdAt -updatedAt' },
    }
}, {
    timestamps: true
});
RoomBookingsSchema.plugin(require('mongoose-autopopulate'));
exports.RoomBookings = mongoose_1.model('RoomBookings', RoomBookingsSchema);
