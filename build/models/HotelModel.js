"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var enumValues = require('mongoose-enumvalues');
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
    opening_days: {
        type: String,
        enum: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
        default: 'Monday'
    },
    opening_hours: {
        type: String,
        enum: [
            '00 h',
            '02 h',
            '03 h',
            '04 h',
            '05 h',
            '06 h',
            '07 h',
            '08 h',
            '09 h',
            '10 h',
            '11 h',
            '12 h',
            '13 h',
            '14 h',
            '15 h',
            '16 h',
            '17 h',
            '18 h',
            '19 h',
            '20 h',
            '21 h',
            '22 h',
            '23 h'
        ]
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
var enumOptions = {};
HotelSchema.plugin(enumValues, enumOptions);
HotelSchema.plugin(require('mongoose-autopopulate'));
exports.Hotel = mongoose_1.model('Hotel', HotelSchema);
