// import * as mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

/* const ServiceHotel = Object.freeze({
    Wi-fi: 'Free and unlimited Wi-fi',
    Fax: 'Fax sending / receiving',
    Television: 'Satellite television',
}); */

// Create a schema
const ServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        // enum: Object.values(ServiceHotel),
        enum: [
            'Free and unlimited Wi-fi',
            'Fax sending / receiving',
            'Satellite television'
        ]
    }
},
                                 {
        timestamps: true
});

/* Object.assign(ServiceSchema.statics, {
    ServiceHotel,
}); */

// Create a model and Exports the model
export let Service = model('Service', ServiceSchema);
