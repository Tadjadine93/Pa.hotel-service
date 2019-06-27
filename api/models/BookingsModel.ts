import { model, Schema } from 'mongoose';

// Create a schema
const BookingsSchema = new Schema({
    date_from: {
        type: Date, // à revoir le type
        default: Date.now

    },
    date_to: {
        type: Date, // à revoir le type
        default: Date.now

    }
},
                                  {
        timestamps: true
});

// Create a model and Exports the model
export let Bookings = model('Bookings', BookingsSchema);
