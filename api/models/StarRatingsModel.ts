import { model, Schema } from 'mongoose';
const enumValues = require('mongoose-enumvalues');

/* const Stars = Object.freeze({
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5'
}); */

// Create a schema
const StarRatingsSchema = new Schema({
    star_rating_code: {
        type: String,
        // enum: Object.values(Stars),
        enum: [
            '1', '2', '3', '4', '5'
        ],
        required: true,
        unique: true,
        default: '1',
    }
    /* star_rating_image: {
        type: String,
    } */
},
                                     {
        timestamps: true
});

/* Object.assign(StarRatingsSchema.statics, {
    Stars,
}); */

// specifics for each method below
const enumOptions = {};

StarRatingsSchema.plugin(enumValues, enumOptions);

// Create a model and Exports the model
export let StarRatings = model('StarRatings', StarRatingsSchema);
