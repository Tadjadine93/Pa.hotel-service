"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var GuestsSchema = new mongoose_1.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
        default: '',
    },
    address: {
        type: String,
        required: true,
        default: '',
    },
    localization: {
        type: [Number],
        index: '2d',
        required: true,
    }
}, {
    timestamps: true
});
exports.Guest = mongoose_1.model('Guest', GuestsSchema);
