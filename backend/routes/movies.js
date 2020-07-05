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

router.post('/sampleMovie', (req, res) => {
    const movie = new Movies({
        movieId:  'iwjfapowifja',
        nextStoryTags: [{ tagId: '54054035', tagName: 'tagname' }],
        ratingReviews: {
            average: 4.6662,
            ratingsAndReviews: [{
                    text: 'this is a sample review',
                    userId: 'user-000',
                    userName: 'Sample Name Here',
                    datePosted: new Date(),
                    rating: 4
                }]
        }
    });
    movie.save()
        .then(movie => {
            console.log('Saved the sample movie', movie);
            res.status(200).json(movie);
        })
        .catch((err) => {
            console.log('Error saving sample movie: ', err);
            res.status(500);
        });
});

module.exports = router;
