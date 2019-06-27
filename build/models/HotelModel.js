"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var HotelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    star_rating: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'StarRatings',
            autopopulate: { select: '-_id -createdAt -updatedAt' },
        }
    ],
    opening_hours: {
        type: String,
    },
    address: {
        type: String,
    },
    post_code: {
        type: Number,
        unique: true,
    },
    web_site_url: {
        type: String,
        unique: true,
    },
    telephone: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
    },
    price_range: {
        type: String,
        required: true,
    },
    room: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Room',
            autopopulate: { select: '-_id -createdAt -updatedAt' },
        }
    ],
    localization: {
        type: [Number],
        index: '2d',
        required: true,
    }
}, {
    timestamps: true
});
HotelSchema.plugin(require('mongoose-autopopulate'));
exports.Hotel = mongoose_1.model('Hotel', HotelSchema);
