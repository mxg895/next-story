var express = require('express');
var router = express.Router();
const Movies = require('../models/movie');
const mongoose = require('mongoose');

router.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    Movies.findOne({ movieId: movieId })
        .populate('nextStoryTags')
        .then(movie => {
            console.log('Got a movie', movie);
            res.status(200).json(movie);
        })
        .catch((err) => {
            console.log('Error fetching movie: ', err);
            res.status(500);
        });
});

module.exports = router;
