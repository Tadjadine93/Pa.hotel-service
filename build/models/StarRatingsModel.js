"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var StarRatingsSchema = new mongoose_1.Schema({
    star_rating_code: {
        type: Number,
        enum: [
            1, 2, 3, 4, 5
        ],
        required: true,
        unique: true,
    }
}, {
    timestamps: true
});
exports.StarRatings = mongoose_1.model('StarRatings', StarRatingsSchema);
