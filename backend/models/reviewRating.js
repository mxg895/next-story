const mongoose = require('mongoose');

const reviewRatingSchema = mongoose.Schema({
    mediaType: { type: String, required: true },
    id:  { type: String, required: true },
    text: String,
    userId: String,
    userName: String,
    datePosted: Date,
    rating: Number
}, { collection: 'reviewRatings' });

module.exports = mongoose.model('ReviewRating', reviewRatingSchema);
