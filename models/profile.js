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
    favoriteAuthors: Array,
    favoriteDirectors: Array
}, { collection: 'profiles' });

class mediaItemDTO {
    id;
    title;
    mediaType;
    image;
    genres;
    blurb;
    publishedDate;
    avgRating;

    constructor(id, title, mediaType,image, genres, blurb, publishedDate,  avgRating){
        this.id = id;
        this.title = title;
        this.mediaType = mediaType;
        this.image = image;
        this.genres = genres;
        this.blurb = blurb;
        this.publishedDate = publishedDate;
        this.avgRating = avgRating;
    }
}



module.exports = mongoose.model('Profile', profileSchema);
