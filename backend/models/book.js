const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const bookSchema = mongoose.Schema({
    bookId:  { type: String, required: true, unique: true },
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
}, { collection: 'books' });

bookSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Book', bookSchema);
