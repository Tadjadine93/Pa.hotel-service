"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var BookingsSchema = new mongoose_1.Schema({
    date_from: {
        type: Date,
        default: Date.now
    },
    date_to: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});
exports.Bookings = mongoose_1.model('Bookings', BookingsSchema);
