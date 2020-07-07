var express = require('express');
var router = express.Router();
const Movies = require('../models/movie');
const axios = require('axios');
const baseUrl = 'https://api.themoviedb.org';
const tmdbApiKey = process.env.TMDBAPI_URL;

router.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    var resMovie = {};
    Movies.findOne({ movieId: movieId }).then(movie => {
            console.log('Got a movie', movie);
            // turn moogooseDoc to Json Object
            movie = movie.toObject();
            const id = '565743';
        axios
            .get(`${baseUrl}/3/movie/${id}`, {
                params: { api_key: tmdbApiKey }
            })
            .then((response) => {
                console.log(response.data);
                var movieData = response.data;
                // movieData._id = movie._id;
                // movieData.movieId = movie.movieId;
                // movieData.nextStoryTags = movie.nextStoryTags;
                movie.title = movieData.title;
                movie.blurb = movieData.overview;
                movie.genres = movieData.genres;
                movie.avgRating = movieData.vote_average;
                console.log(movie);
                res.status(200).json(movie);
            })
            .catch((error) => console.log(error));


        })
        .catch((err) => {
            console.log('Error fetching movie: ', err);
            res.status(500);
        });
});



// var getGenres = function() {
//     axios
//         .get(`${baseUrl}/3/genre/movie/list`, {
//             params: { api_key: tmdbApiKey }
//         })
//         .then((response) => {
//             var genres = response.data.genres;
//             console.log(genres);
//         }). then(() => {
//             getMovies
//     })
//         .catch((error) => console.log(error));
// }
//
// var getMoviesCredits = function(movieId){
//     axios
//         .get(`${baseUrl}/3/movie/${movieId}/credits`, {
//             params: { api_key: tmdbApiKey }
//         })
//         .then((response) => {
//
//             console.log(response.data.cast);
//             console.log(response.data.crew);
//         })
//         .catch((error) => console.log(error));
// }

var getMovies = function (movieId, movie) {
    // axios
    //     .get(`${baseUrl}/3/movie/${movieId}`, {
    //         params: { api_key: tmdbApiKey }
    //     })
    //     .then((response) => {
    //
    //         console.log(response.data);
    //     })
    //     .catch((error) => console.log(error));
    axios
        .get(`${baseUrl}/3/movie/${movieId}`, {
            params: { api_key: tmdbApiKey }
        })
        .then((response) => {
            console.log(response.data);
            var movieData = response.data;
            // movieData._id = movie._id;
            // movieData.movieId = movie.movieId;
            // movieData.nextStoryTags = movie.nextStoryTags;
            movie.title = movieData.title;
            movie.blurb = movieData.overview;
            movie.genres = movieData.genres;
            movie.avgRating = movieData.vote_average;
            console.log(movie);
            return movie;
        })
        .catch((error) => console.log(error));

}

module.exports = router;


//     title - title
//     image,
//     people, - director another api call
//     blurb - overview
//     genres - genres
//     nextStoryTags,
//     avgRating, - vote_average
//     userRating,
//     userHasReviewText
// }

// title: 'Mock Title Harry Potter',
//     id: 'movie-001',
//     mediaType: MediaType.movie,
//     image: MockCover,
//     people: 'J.K. Rowling',
//     genres: ['fantasy', 'action', 'sci-fi', 'superheroes', 'tag1', 'tag2', 'tag3'],
//     nextStoryTags: mediaRes.data.nextStoryTags,
//     blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     avgRating: reviewRatingRes.data.average,
//     userRating: userRating,
//     userHasReviewText: userHasReviewText