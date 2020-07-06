var express = require('express');
var router = express.Router();
const Movies = require('../models/movie');
const axios = require('axios');
const baseUrl = 'https://api.themoviedb.org';
const tmdbApiKey = process.env.TMDBAPI_URL;

router.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    Movies.findOne({ movieId: movieId })
        .then(movie => {
            console.log('Got a movie', movie);
            getGenres();
            res.status(200).json(movie);
        })
        .catch((err) => {
            console.log('Error fetching movie: ', err);
            res.status(500);
        });
});

var getGenres = function() {
    axios
        .get(`${baseUrl}/3/genre/movie/list`, {
            params: { api_key: tmdbApiKey }
        })
        .then((response) => {
            var genres = response.data.genres;
            console.log(genres);
        })
        .catch((error) => console.log(error));
}

module.exports = router;
