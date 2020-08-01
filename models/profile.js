const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    userId: String,
    email: String,
    encrypted: String,
    name: String,
    type: String,
    avatar: String,
    message: String,
    booksRead: Array,
    moviesWatched: Array,
    readLater: Array,
    watchLater: Array,
    favoriteMovies: Array,
    favoriteBooks: Array,
    favoriteGenres: Array,
    booksReadDetails: [{id:String, title:String, mediaType:String, image:String, people:[], genres:[], blurb:String}],
    moviesWatchedDetails: [{id:String, title:String, mediaType:String, image:String, people:[], genres:[], blurb:String}],
    readLaterDetails: [{id:String, title:String, mediaType:String, image:String, people:[], genres:[], blurb:String}],
    watchLaterDetails: [{id:String, title:String, mediaType:String, image:String, people:[], genres:[], blurb:String}],
    favoriteMoviesDetails: [{id:String, title:String, mediaType:String, image:String, people:[], genres:[], blurb:String}],
    favoriteBooksDetails: [{id:String, title:String, mediaType:String, image:String, people:[], genres:[], blurb:String}],
    favoriteNextStoryTags: [{tagId: String, tagName: String }],
    favoriteAuthors: Array,
    favoriteDirectors: Array
}, { collection: 'profiles' });

module.exports = mongoose.model('Profile', profileSchema);
