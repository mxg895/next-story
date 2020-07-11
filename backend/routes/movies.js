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
            const id = '565743';
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
                        movie.publishedDate = movieData.release_date;
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

module.exports = router;

// id: foundItem.id,
//     title: foundItem.volumeInfo && foundItem.volumeInfo.title,
//     mediaType: 'book',
//     image: foundItem.volumeInfo && foundItem.volumeInfo.imageLinks
// && foundItem.volumeInfo.imageLinks.thumbnail,
//     genres: foundItem.volumeInfo && foundItem.volumeInfo.categories,
//     blurb: foundItem.volumeInfo && foundItem.volumeInfo.description,
//     people: foundItem.volumeInfo && foundItem.volumeInfo.authors,
//     publishedDate: foundItem.volumeInfo && foundItem.volumeInfo.publishedDate

//     title - title
//     image, - not sure how to structure this
//     people, - director another api call
//     blurb - overview
//     genres - genres
//     nextStoryTags, - from our db
//     avgRating, - vote_average
//     userRating, - from our db
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