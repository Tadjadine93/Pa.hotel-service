"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var enumValues = require('mongoose-enumvalues');
var StarRatingsSchema = new mongoose_1.Schema({
    star_rating_code: {
        type: String,
        enum: [
            '1', '2', '3', '4', '5'
        ],
        required: true,
        unique: true,
        default: '1',
    }
}, {
    timestamps: true
});
var enumOptions = {};
StarRatingsSchema.plugin(enumValues, enumOptions);
exports.StarRatings = mongoose_1.model('StarRatings', StarRatingsSchema);
