var express = require('express');
var router = express.Router();
const axios = require('axios');

// note gets first 10 matches ... query can be title, id, genre, etc (basically anything in the 'response' data)
router.get('/googleBooks/searchTen/:query', (req, res) => {
    const bookQuery = req.params.query;
    axios.get(` https://www.googleapis.com/books/v1/volumes?q=${bookQuery}`)
        .then((response) => {
            console.log(response);
            const numberFound = response.data.totalItems;
            const numberToGet = numberFound >= 10 ? 10 : numberFound;
            const returnList = [];
            let i = 0;
            while (i < numberToGet) {
                const foundItem = response.data.items[i];
                const returnObject = {
                    id: foundItem.id,
                    title: foundItem.volumeInfo && foundItem.volumeInfo.title,
                    mediaType: 'book',
                    image: foundItem.volumeInfo && foundItem.volumeInfo.imageLinks
                        && foundItem.volumeInfo.imageLinks.thumbnail,
                    genres: foundItem.volumeInfo && foundItem.volumeInfo.categories,
                    blurb: foundItem.volumeInfo && foundItem.volumeInfo.description,
                    people: foundItem.volumeInfo && foundItem.volumeInfo.authors,
                    publishedDate: foundItem.volumeInfo && foundItem.volumeInfo.publishedDate
                }
                returnList.push(returnObject);
                i++;
            }
            console.log('Succeeded getting book from googleBooks:', returnList);
            res.status(200).json(returnList);
        })
        .catch((error) => console.log(error));
});

router.get('/googleMovies/searchTen/:query', (req, res) => {
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
                        for(let i = 0; i < response.data.crew.length; i++){
                            if(response.data.crew[i].department === 'Directing'){
                                // console.log(response.data.crew[i]);
                                movie.people = "Director-" + response.data.crew[i].name;
                            }
                        }
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

// note gets first match ...usually only reliable when querying by id
router.get('/googleBooks/searchOne/:query', (req, res) => {
    const bookQuery = req.params.query;
    axios.get(` https://www.googleapis.com/books/v1/volumes?q=${bookQuery}`)
        .then((response) => {
            console.log(response);
            const foundItem = response.data.items[0];
            const returnObject = {
                id: foundItem.id,
                title: foundItem.volumeInfo && foundItem.volumeInfo.title,
                mediaType: 'book',
                image: foundItem.volumeInfo && foundItem.volumeInfo.imageLinks
                    && foundItem.volumeInfo.imageLinks.thumbnail,
                genres: foundItem.volumeInfo && foundItem.volumeInfo.categories,
                blurb: foundItem.volumeInfo && foundItem.volumeInfo.description,
                people: foundItem.volumeInfo && foundItem.volumeInfo.authors,
                publishedDate: foundItem.volumeInfo && foundItem.volumeInfo.publishedDate
            }
            console.log('Succeeded getting book from googleBooks:', returnObject);
            res.status(200).json(returnObject);
        })
        .catch((error) => console.log(error));
});

module.exports = router;
