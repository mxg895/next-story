var express = require('express');
var router = express.Router();
const Movies = require('../models/movie');
const axios = require('axios');
const baseUrl = 'https://api.themoviedb.org';
const tmdbApiKey = process.env.TMDBAPI_URL;

// NOTE: keeping backend console logs for errors to aid future development
router.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    let movie = {};
    axios
        .get(`${baseUrl}/3/movie/${movieId}`, {
            params: { api_key: tmdbApiKey }
        })
        .then((response) => {
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

            axios
                .get(`${baseUrl}/3/movie/${movieId}/credits`, {
                    params: { api_key: tmdbApiKey }
                })
                .then((response) => {
                    people = [];
                    for(let i = 0; i < response.data.crew.length; i++){
                        if(response.data.crew[i].department === 'Directing'){
                            people.push(response.data.crew[i].name);
                        }
                    }
                    movie.people = people;
                    res.status(200).json(movie);
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).json({ message: 'Error getting people for movie'});
                });
        })
        .catch((error) => {
            console.log(error);
            res.status(404).json({ message: 'Could not fetch movie'});
        });
});

router.get('/tags/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    Movies.findOne({ movieId: movieId }).then(movie => {
        const retMovie = {
            movieId: movieId,
            nextStoryTags: movie && movie.nextStoryTags || []
        }
        res.status(200).json(retMovie);
    }).catch((err) => {
            console.log('Error fetching movie from mongodb: ', err);
            res.status(500);
        });
});

router.get('/withTag/:tagId', (req, res) => {
    const tagId = req.params.tagId;
    Movies.find({
        "nextStoryTags.tagId": tagId
    }).then(movies => {
        res.status(200).json(movies);
    }).catch((err) => {
        console.log('Error fetching movies for tag: ', err);
        res.status(500);
    });
});

router.get('/withTags/:tags', (req, res) => {
    const tags = req.params.tags.split('&');
    Movies.find({
        "nextStoryTags.tagId": { $all: tags}
    }).then(movies => {
        res.status(200).json(movies);
    }).catch((err) => {
        console.log('Error fetching movies for tag: ', err);
        res.status(500);
    });
});

router.put('/updateNextStoryTags/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const { tagsArray } = req.body;
    let query = { movieId: movieId };
    let update = {
        $setOnInsert: {movieId:  movieId},
         nextStoryTags: tagsArray // or $push
    }
    Movies.findOneAndUpdate(query, update, {upsert:true})
        .then(movie => {
            res.status(200).json(movie);
    }).catch((err) => {
            console.log('Error deleting a nextStoryTag from a movie: ', err);
            res.status(500);
    });
});

module.exports = router;

