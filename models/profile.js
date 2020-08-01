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
    favoriteGenres: Array,
    favoriteNextStoryTags: [{tagId: String, tagName: String }],
    favoriteMovies: Array,
    favoriteBooks: Array,
    favoriteMoviesDetails: [{id:String, title:String, mediaType:String, image:String, genres:String, blurb:String, publishedDate:String, avgRating:Number}],
    favoriteBooksDetails: [{id:String, title:String, mediaType:String, image:String, genres:String, blurb:String, publishedDate:String, avgRating:Number}],
    favoriteAuthors: Array,
    favoriteDirectors: Array
}, { collection: 'profiles' });

module.exports = mongoose.model('Profile', profileSchema);
