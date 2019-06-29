"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var RoomSchema = new mongoose_1.Schema({
    room_number: {
        type: Number,
        required: true,
        unique: true,
    },
    room_type: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'RoomType',
            autopopulate: { select: '-_id -createdAt -updatedAt' },
        }
    ],
    beds: {
        type: Number
    },
    max_occupancy: {
        type: Number
    },
    service: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Service',
            autopopulate: { select: '-_id -createdAt -updatedAt' },
        }
    ],
    cost_per_night: {
        type: Number
    },
}, {
    timestamps: true
});
RoomSchema.plugin(require('mongoose-autopopulate'));
exports.Room = mongoose_1.model('Room', RoomSchema);
