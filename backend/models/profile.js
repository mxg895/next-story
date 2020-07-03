const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name: String,
    type: String,
    avatar: String,
    message: String,
    booksRead: Array,
    moviesWatched: Array,
    favoriteGenres: Array,
    favoriteNextStoryTags: [{ type: mongoose.Schema.ObjectId, ref: 'NextStoryTag' }],
    favoriteMovies: Array,
    favoriteBooks: Array,
    favoriteAuthors: Array,
    favoriteDirectors: Array
}, { collection: 'profiles' });

module.exports = mongoose.model('Profile', profileSchema);
