const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movieId:  { type: String, required: true },
    nextStoryTags: [{ tagId: String, tagName: String }],
}, { collection: 'movies' });

module.exports = mongoose.model('Movie', movieSchema);
