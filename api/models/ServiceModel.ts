import { model, Schema } from 'mongoose';
const enumValues = require('mongoose-enumvalues');

// Create a schema
const ServiceSchema = new Schema({
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
},
                                 {
        timestamps: true
});

// specifics for each method below
const enumOptions = {};

ServiceSchema.plugin(enumValues, enumOptions);

// Create a model and Exports the model
export let Service = model('Service', ServiceSchema);
