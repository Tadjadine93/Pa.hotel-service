import { model, Schema } from 'mongoose';

// Create a schema
const RoomBookingsSchema = new Schema({
    date_booking_from: {
        type: Date, // à revoir le type
        default: Date.now,
        required: true,
    },
    date_booking_to: {
        type: Date, // à revoir le type
        default: Date.now,
        required: true,
    },
    room_count: {
        type: Number,
    },
    max_occupancy: {
        type: Number,
        required: true,
    }
},
                                      {
        timestamps: true
});

// Create a model and Exports the model
export let RoomBookings = model('RoomBookings', RoomBookingsSchema);
