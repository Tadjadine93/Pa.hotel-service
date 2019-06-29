"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var enumValues = require('mongoose-enumvalues');
var ServiceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        enum: [
            'Free and unlimited Wi-fi',
            'Fax sending / receiving',
            'Satellite television'
        ],
        default: 'Free and unlimited Wi-fi',
    }
}, {
    timestamps: true
});
var enumOptions = {};
ServiceSchema.plugin(enumValues, enumOptions);
exports.Service = mongoose_1.model('Service', ServiceSchema);
