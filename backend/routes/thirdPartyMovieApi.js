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
                publishedDate: foundItem.release_date
            }
            returnObject.people = [];
            console.log('Succeeded getting book from googleBooks:', returnObject);
            res.status(200).json(returnObject);
        })
        .catch((error) => console.log(error));
});

module.exports = router;
