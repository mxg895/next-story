var express = require('express');
var router = express.Router();
const Movies = require('../models/movie');
const mongoose = require('mongoose');

router.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    Movies.findOne({ movieId: movieId })
        .populate('nextStoryTags')
        .then(movie => {
            console.log('Got all a movie', movie);
            res.status(200).json(movie);
        })
        .catch((err) => {
            console.log('Error fetching movie: ', err);
            res.status(500);
        });
});

router.post('/sampleMovie', (req, res) => {
    const movie = new Movies({
        movieId:  'movie-000',
        nextStoryTags: [mongoose.Types.ObjectId('5eff936c68db8c7667275e23'), mongoose.Types.ObjectId('4eff936c68db8c7667275e22')],
        ratingReviews: {
            average: 4.6662,
            ratingsAndReviews: [{
                    text: 'this is a sample review',
                    userId: mongoose.Types.ObjectId('5eff936c68db8c7667275e28'),
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
