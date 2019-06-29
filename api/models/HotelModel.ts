import { model, Schema } from 'mongoose';
const enumValues = require('mongoose-enumvalues');

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
    opening_days: {
        type: String,
        enum: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
        default: 'Monday'
    },
    opening_hours: {
        type: String, // à revoir le type
        enum: [
            '00 h',
            '02 h',
            '03 h',
            '04 h',
            '05 h',
            '06 h',
            '07 h',
            '08 h',
            '09 h',
            '10 h',
            '11 h',
            '12 h',
            '13 h',
            '14 h',
            '15 h',
            '16 h',
            '17 h',
            '18 h',
            '19 h',
            '20 h',
            '21 h',
            '22 h',
            '23 h'
        ]
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
    /* phone: {
        type: String,
        validate: {
          isAsync: true,
          validator: function(v, cb) {
            setTimeout(function() {
              var phoneRegex = /\d{3}-\d{3}-\d{4}/; // rechercher un phoneRegex qui correspond pour tous les pays ????
              var msg = v + ' is not a valid phone number!';
              // First argument is a boolean, whether validator succeeded
              // 2nd argument is an optional error message override
              cb(phoneRegex.test(v), msg);
            }, 5);
          },
          // Default error message, overridden by 2nd argument to `cb()` above
          message: 'Default error message'
        }, 
        required: [true, 'User phone number required']
      },*/
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

// specifics for each method below
const enumOptions = {};

HotelSchema.plugin(enumValues, enumOptions);

// tslint:disable-next-line: no-var-requires
HotelSchema.plugin(require('mongoose-autopopulate'));

// Create a model and Exports the model
export let Hotel = model('Hotel', HotelSchema);
