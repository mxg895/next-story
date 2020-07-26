var express = require('express');
var router = express.Router();
const axios = require('axios');
const tmdbApiKey = process.env.TMDBAPI_URL;
const baseUrl = 'https://api.themoviedb.org';

// note gets first 10 matches ... query can be title, id, genre, etc (basically anything in the 'response' data)
router.get('/tmdbMovies/searchTen/:query', (req, res) => {
    const movieQuery = req.params.query;
    axios.get(`${baseUrl}/3/search/movie?api_key=${tmdbApiKey}&language=en-US&query=${movieQuery}&page=1&include_adult=false`)
        .then((response) => {
            console.log(response);
            const numberFound = response.data.results.length;
            const numberToGet = numberFound >= 10 ? 10 : numberFound;
            const returnList = [];
            //let promises = [];
            let i = 0;
            while (i < numberToGet) {
                let people = [];
                const foundItem = response.data.results[i];
                const returnObject = {
                    id: foundItem.id,
                    title:  foundItem.title,
                    mediaType: 'movie',
                    image:   'https://image.tmdb.org/t/p/w342/' + foundItem.poster_path,
                    genres: foundItem.genre_ids,
                    blurb: foundItem.overview,
                    publishedDate: foundItem.release_date,
                    avgRating: 3
                }
                // promises.push(
                //     axios.get(`${baseUrl}/3/movie/${foundItem.id}/credits`, {
                //         params: { api_key: tmdbApiKey }
                //     })
                //         .then((response) => {
                //             people = [];
                //             for(let i = 0; i < response.data.crew.length; i++){
                //                 if(response.data.crew[i].department === 'Directing'){
                //                     // console.log(response.data.crew[i]);
                //                     people.push("Director-" + response.data.crew[i].name);
                //                 }
                //             }
                //             returnList.people = people;
                //
                //         })
                // )
                returnObject.people = people;
                // Promise.all(promises).then(() => {
                //     console.log(people)
                //     console.log(returnList);
                //
                // });
                returnList.push(returnObject);
                i++;
            }

            console.log('Succeeded getting movies from tmdbApi:', returnList);
            res.status(200).json(returnList);
        })
        .catch((error) => console.log(error));
});

//note gets first match ...usually only reliable when querying by id
router.get('/tmdbMovies/searchOne/:query', (req, res) => {
    const movieQuery = req.params.query;
    axios.get(`${baseUrl}/3/search/movie?api_key=${tmdbApiKey}&language=en-US&query=${movieQuery}&page=1&include_adult=false`)
        .then((response) => {
            console.log(response);
            const foundItem = response.data.results[0];
            const returnObject = {
                id: foundItem.id,
                title:  foundItem.title,
                mediaType: 'movie',
                image:   'https://image.tmdb.org/t/p/w342/' + foundItem.poster_path,
                genres: foundItem.genre_ids,
                blurb: foundItem.overview,
                publishedDate: foundItem.release_date,
                avgRating: foundItem.vote_average
            }
            returnObject.people = [];
            console.log('Succeeded getting book from googleBooks:', returnObject);
            res.status(200).json(returnObject);
        })
        .catch((error) => console.log(error));
});

// popular movies
router.get('/tmdbMovies/popularMovies', (req, res) => {
    axios.get(`${baseUrl}/3/movie/popular?api_key=${tmdbApiKey}&language=en-US&page=1&include_adult=false`)
        .then((response) => {
            console.log(response);
            const numberFound = response.data.results.length;
            const numberToGet = numberFound >= 100 ? 100 : numberFound;
            const returnList = [];
            let genresMap = new Map();
            for(let i = 0; i < genres.length; i++){
                genresMap[genres[i].id] = genres[i].name;
            }
            let i = 0;
            while (i < numberToGet) {
                let people = [];
                const foundItem = response.data.results[i];
                let resGenres = [];
                for(let i = 0; i < foundItem.genre_ids.length; i++){
                    resGenres.push(genresMap[foundItem.genre_ids[i]]);
                }
                const returnObject = {
                    id: foundItem.id,
                    title:  foundItem.title,
                    mediaType: 'movie',
                    image:   'https://image.tmdb.org/t/p/w342/' + foundItem.poster_path,
                    genres: resGenres,
                    blurb: foundItem.overview,
                    publishedDate: foundItem.release_date,
                    avgRating: foundItem.vote_average
                }
                returnObject.people = people;
                returnList.push(returnObject);
                i++;
            }

            console.log('Succeeded getting movies from tmdbApi:', returnList);
            res.status(200).json(returnList);
        })
        .catch((error) => console.log(error));
});


//  movies recommendation
router.get('/tmdbMovies/movieRecommendations', (req, res) => {
    axios.get(`${baseUrl}/3/movie/top_rated?api_key=${tmdbApiKey}&language=en-US&page=1&include_adult=false`)
        .then((response) => {
            console.log(response);
            const numberFound = response.data.results.length;
            const numberToGet = numberFound >= 100 ? 100 : numberFound;
            const returnList = [];
            let genresMap = new Map();
            for(let i = 0; i < genres.length; i++){
                genresMap[genres[i].id] = genres[i].name;
            }
            let i = 0;
            while (i < numberToGet) {
                let people = [];
                const foundItem = response.data.results[i];
                let resGenres = [];
                for(let i = 0; i < foundItem.genre_ids.length; i++){
                    resGenres.push(genresMap[foundItem.genre_ids[i]]);
                }
                const returnObject = {
                    id: foundItem.id,
                    title:  foundItem.title,
                    mediaType: 'movie',
                    image:   'https://image.tmdb.org/t/p/w342/' + foundItem.poster_path,
                    genres: resGenres,
                    blurb: foundItem.overview,
                    publishedDate: foundItem.release_date,
                    avgRating: foundItem.vote_average
                }
                returnObject.people = people;
                returnList.push(returnObject);
                i++;
            }

            console.log('Succeeded getting movies from tmdbApi:', returnList);
            res.status(200).json(returnList);
        })
        .catch((error) => console.log(error));
});

//  get Director/Directors
router.get('/tmdbMovies/movieDirector/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    axios
        .get(`${baseUrl}/3/movie/${movieId}/credits`, {
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
            //console.log(response.data.crew);
            res.status(200).json(people);
        })
        .catch((error) => console.log(error));
});

const genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
];

module.exports = router;

