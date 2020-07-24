const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const bookSchema = mongoose.Schema({
    bookId:  { type: String, required: true, unique: true },
    nextStoryTags: [{ tagId: String, tagName: String }],
}, { collection: 'books' });

bookSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Book', bookSchema);
