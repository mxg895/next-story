const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const bookSchema = mongoose.Schema({
    bookId:  { type: String, required: true, unique: true },
    nextStoryTags: [{ tagId: String, tagName: String }],
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
}, { collection: 'books' });

bookSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Book', bookSchema);
