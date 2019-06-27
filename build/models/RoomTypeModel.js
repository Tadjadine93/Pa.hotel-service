"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var RoomTypeSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
        enum: [
            'Single bedroom',
            'Double room',
            'Business and family rooms',
            'Connecting rooms',
            'Suite'
        ],
        unique: true
    },
    room_standard_rate: {
        type: Number,
        required: true,
    },
    room_type_description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});
exports.RoomType = mongoose_1.model('RoomType', RoomTypeSchema);
