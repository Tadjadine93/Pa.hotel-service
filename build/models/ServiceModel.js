"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ServiceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        enum: [
            'Free and unlimited Wi-fi',
            'Fax sending / receiving',
            'Satellite television'
        ]
    }
}, {
    timestamps: true
});
exports.Service = mongoose_1.model('Service', ServiceSchema);
