var express = require('express');
var router = express.Router();
const axios = require('axios');
const goodreadsBaseUrl = 'https://www.goodreads.com/';
const goodreadsApiKey = process.env.GOODREADS_API_KEY;
const openlibraryBaseUrl = 'https://openlibrary.org/';
var parseString = require('xml2js').parseString;

router.get('/goodreads/isbn/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    axios.get(`${goodreadsBaseUrl}/search/index.xml`,
        { params: { key: goodreadsApiKey, q: isbn } })
        .then((response) => {
            parseString(response.data, function (err, result) {
                const stringifiedResult = JSON.stringify(result);
                const parsedResult = JSON.parse(stringifiedResult);
                console.log('Succeeded getting book from goodreads by isbn');
                res.status(200).json(parsedResult);
            });
        })
        .catch((error) => console.log(error));
});

// spaces should be replaced with %20, can maybe parse to url string using external library?
router.get('/openLibrary/title/:title', (req, res) => {
    const bookTitle = req.params.title;
    axios.get(`${openlibraryBaseUrl}/search.json?title=${bookTitle}`)
        .then((response) => {
            console.log('Succeeded getting book from openLibrary:', response.data.docs[0]);
            res.status(200);
        })
        .catch((error) => console.log(error));
});

// https://www.googleapis.com/books/v1/volumes?q=isbn:9780439554930
router.get('/googleBooks/searchOne/:query', (req, res) => {
    const bookQuery = req.params.query;
    axios.get(` https://www.googleapis.com/books/v1/volumes?q=${bookQuery}`)
        .then((response) => {
            console.log('Succeeded getting book from openLibrary:', response.data.items[0]);
            res.status(200);
        })
        .catch((error) => console.log(error));
});

module.exports = router;
