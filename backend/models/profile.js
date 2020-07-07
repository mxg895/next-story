const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    userId: String,
    name: String,
    type: String,
    avatar: String,
    message: String,
    booksRead: Array,
    moviesWatched: Array,
    readLater: Array,
    watchLater: Array,
    favoriteGenres: Array,
    favoriteNextStoryTags: [{tagId: String, tagName: String }],
    favoriteMovies: Array,
    favoriteBooks: Array,
    favoriteAuthors: Array,
    favoriteDirectors: Array
}, { collection: 'profiles' });

module.exports = mongoose.model('Profile', profileSchema);
