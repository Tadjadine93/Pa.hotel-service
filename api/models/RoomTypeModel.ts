import { model, Schema } from 'mongoose';

// Create a schema
const RoomTypeSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: [
            'Single bedroom',
            'Double room',
            'Business and family rooms',
            'Connecting rooms',
            'Suite'
        ],
        unique: true
    },
    room_standard_rate: {
        type: Number,
        required: true,
    },
    room_type_description: {
        type: String,
        required: true,
    }
},
                                  {
        timestamps: true
});

// Create a model and Exports the model
export let RoomType = model('RoomType', RoomTypeSchema);
