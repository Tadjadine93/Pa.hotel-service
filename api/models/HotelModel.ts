import { model, Schema } from 'mongoose';

// Create a schema
const HotelSchema = new Schema({
    name: {
        type: String,
        required: true,
        // unique: true,
    },
    description: {
        type: String,
    },
    star_rating: [{
        type: Schema.Types.ObjectId,
        ref: 'StarRatings',
        autopopulate: { select: '-_id -createdAt -updatedAt' },
    }
  ],
    opening_hours: {
        type: String, // à revoir le type
    },
    address: {
        type: String,
    },
    post_code: {
        type: Number,
        unique: true,
    },
    web_site_url: {
        type: String,
        unique: true,
    },
    telephone: {
        type: String,
        required: true,
        unique: true,
    },
    photo: {
        type: String,
    },
    price_range: {
        type: String,
        required: true,
    },
    room: [{
        type: Schema.Types.ObjectId,
        ref: 'Room',
        autopopulate: { select: '-_id -createdAt -updatedAt' },
    }
  ],
  localization: {
        type: [Number],
        index: '2d',
        required: true,
    }
    /* lat: {
        type: Number
    },
    lon: {
        type: Number
    } */
},
                               {
        timestamps: true
});

// tslint:disable-next-line: no-var-requires
HotelSchema.plugin(require('mongoose-autopopulate'));

// Create a model and Exports the model
export let Hotel = model('Hotel', HotelSchema);
