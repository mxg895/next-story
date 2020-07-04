const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movieId:  { type: String, required: true },
    nextStoryTags: [{id: String, name: String }],
    ratingReviews: {
        average: Number,
        ratingsAndReviews: [{
                text: String,
                userId: String,
                userName: String,
                datePosted: Date,
                rating: Number
            }]
    }
}, { collection: 'movies' });

module.exports = mongoose.model('Movie', movieSchema);
