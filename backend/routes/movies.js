var express = require('express');
var router = express.Router();
const Movies = require('../models/movie');
const axios = require('axios');
const baseUrl = 'https://api.themoviedb.org';
const tmdbApiKey = process.env.TMDBAPI_URL;

router.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    Movies.findOne({ movieId: movieId }).then(movie => {
            console.log('Got a movie', movie);
            // turn moogooseDoc to Json Object
            movie = movie.toObject();
            const id = '8619';
        axios
            .get(`${baseUrl}/3/movie/${id}`, {
                params: { api_key: tmdbApiKey }
            })
            .then((response) => {
                console.log(response.data);
                var movieData = response.data;
                movie.title = movieData.title;
                movie.mediaType = 'movie';
                movie.blurb = movieData.overview;
                movie.genres = [];
                movie.image = 'https://image.tmdb.org/t/p/w342/' + movieData.poster_path;
                movie.publishedDate = movieData.release_date;
                for(let i=0; i < movieData.genres.length; i++){
                    movie.genres[i] = movieData.genres[i].name;
                }
                movie.avgRating = movieData.vote_average;
                console.log(movie);

                axios
                    .get(`${baseUrl}/3/movie/${id}/credits`, {
                        params: { api_key: tmdbApiKey }
                    })
                    .then((response) => {
                        people = [];
                        for(let i = 0; i < response.data.crew.length; i++){
                            if(response.data.crew[i].department === 'Directing'){
                                // console.log(response.data.crew[i]);
                                people.push("Director-" + response.data.crew[i].name);
                            }
                        }
                        movie.people = people;
                        //console.log(response.data.crew);
                        res.status(200).json(movie);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        })
        .catch((err) => {
            console.log('Error fetching movie: ', err);
            res.status(500);
        });
});

router.put('/updateNextStoryTags/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const { tagsArray } = req.body;
    Movies.findOneAndUpdate({ movieId: movieId }, { nextStoryTags: tagsArray }, { new: true })
        .then(movie => {
            console.log('the updated movie: ', movie);
            res.status(200).json(movie);
    }).catch((err) => {
            console.log('Error deleting a nextStoryTag from a movie: ', err);
            res.status(500);
    });
});

module.exports = router;

