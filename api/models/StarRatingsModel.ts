import { model, Schema } from 'mongoose';

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
        type: Number,
        // enum: Object.values(Stars),
        enum: [
            1, 2, 3, 4, 5
        ],
        required: true,
        unique: true,
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
// Create a model and Exports the model
export let StarRatings = model('StarRatings', StarRatingsSchema);
