import { model, Schema } from 'mongoose';

// Create a schema
const GuestsSchema = new Schema({
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
    /* ,
    lat: {
        type: Number,
        // required: true,
        // default: '',
    },
    lon: {
        type: Number,
        // required: true,
        // default: '',
    } */
},
                                {
        timestamps: true
});

// Create a model and Exports the model
export let Guest = model('Guest', GuestsSchema);
