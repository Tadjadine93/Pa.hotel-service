import { model, Schema } from 'mongoose';

// Create a schema
const RoomSchema = new Schema({
    room_number: {
        type: Number,
        required: true,
        unique: true,
    },
    room_type: [
    {
      type: Schema.Types.ObjectId,
      ref: 'RoomType',
      autopopulate: { select: '-_id -createdAt -updatedAt' },
    }
  ],
    beds: {
        type: Number
    },
    max_occupancy: {
        type: Number
    },
    service: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      autopopulate: { select: '-_id -createdAt -updatedAt' },
    }
  ],
    cost_per_night: {
        type: Number
    },
    /* reserved: [
        {
            from: String,
            to: String
        }
    ] */
},
                              {
        timestamps: true
});

// tslint:disable-next-line: no-var-requires
RoomSchema.plugin(require('mongoose-autopopulate'));

// Create a model and Exports the model
export let Room = model('Room', RoomSchema);
