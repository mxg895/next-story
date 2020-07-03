const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const movieSchema = mongoose.Schema({
    movieId:  { type: String, required: true, unique: true },
    nextStoryTags: [{ type: mongoose.Schema.ObjectId, ref: 'NextStoryTag' }],
    ratingReviews: {
        average: Number,
        ratingsAndReviews: [{
                text: String,
                userId: { type: mongoose.Schema.ObjectId, ref: 'Profile' },
                userName: String,
                datePosted: Date,
                rating: Number
            }]
    }
}, { collection: 'movies' });

movieSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Movie', movieSchema);
