import { model, Schema } from 'mongoose';
import { Bookings } from './BookingsModel';

// Create a schema
const RoomBookingsSchema = new Schema({
    // à revoir
    /* date_booking_from: {
        type: Date, // à revoir le type
        default: Date.now,
        required: true,
    },
    date_booking_to: {
        type: Date, // à revoir le type
        default: Date.now,
        required: true,
    }, */
    bookings: {
        type: Schema.Types.ObjectId,
        ref: 'Bookings',
        autopopulate: { select: '-_id -createdAt -updatedAt' },
    },
    room_count: {
        type: Number,
    },
    max_occupancy: {
        type: Number,
        required: true,
    },
    guest: {
        type: Schema.Types.ObjectId,
        ref: 'Guest',
        autopopulate: { select: '-_id -createdAt -updatedAt' },
    }
},
                                      {
        timestamps: true
});

// tslint:disable-next-line: no-var-requires
RoomBookingsSchema.plugin(require('mongoose-autopopulate'));

// Create a model and Exports the model
export let RoomBookings = model('RoomBookings', RoomBookingsSchema);
