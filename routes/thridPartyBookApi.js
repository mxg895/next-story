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

router.get('/googleBooks/popularBooks', (req, res) => {
    axios.get(` https://www.googleapis.com/books/v1/volumes?q=' '`)
        .then((response) => {


            //handle top 10 best rating books
            let filterUndefinedBooks = response.data.items && response.data.items.filter(function(element){
                return element.volumeInfo.averageRating !== undefined;
            })
            const sortedBooks = filterUndefinedBooks && filterUndefinedBooks.sort(function(a, b) {
                // console.log(a);
                if(a.volumeInfo.averageRating < b.volumeInfo.averageRating) { return 1; }
                if(a.volumeInfo.averageRating > b.volumeInfo.averageRating) { return -1; }
                return 0;
            });
            const numberFound = sortedBooks && sortedBooks.length || 0;
            const numberToGet = numberFound >= 10 ? 10 : numberFound;
            const returnList = [];
            let i = 0;
            while (i < numberToGet) {
                const foundItem = sortedBooks[i];
                console.log(foundItem.volumeInfo.averageRating);
               // console.log(foundItem.volumeInfo.ratingsCount);
                const returnObject = {
                    id: foundItem.id,
                    title: foundItem.volumeInfo && foundItem.volumeInfo.title,
                    mediaType: 'book',
                    image: foundItem.volumeInfo && foundItem.volumeInfo.imageLinks
                        && foundItem.volumeInfo.imageLinks.thumbnail,
                    genres: foundItem.volumeInfo && foundItem.volumeInfo.categories,
                    blurb: foundItem.volumeInfo && foundItem.volumeInfo.description,
                    people: foundItem.volumeInfo && foundItem.volumeInfo.authors,
                    publishedDate: foundItem.volumeInfo && foundItem.volumeInfo.publishedDate,
                    avgRating : foundItem.volumeInfo && foundItem.volumeInfo.averageRating
                }
                returnList.push(returnObject);
                i++;
            }
            //console.log('Succeeded getting book from googleBooks:', returnList);
            res.status(200).json(returnList);
        })
        .catch((error) => console.log(error));
});

router.get('/googleBooks/bookRecommendations', (req, res) => {
    axios.get(` https://www.googleapis.com/books/v1/volumes?q=a`)
        .then((response) => {


            //handle top 10 best rating books
            let filterUndefinedBooks = response.data.items.filter(function(element){
                return element.volumeInfo.ratingsCount !== undefined;
            })
            const sortedBooks = filterUndefinedBooks.sort(function(a, b) {
                // console.log(a);
                if(a.volumeInfo.ratingsCount < b.volumeInfo.ratingsCount) { return 1; }
                if(a.volumeInfo.ratingsCount > b.volumeInfo.ratingsCount) { return -1; }
                return 0;
            });
            const numberFound = sortedBooks.length;
            const numberToGet = numberFound >= 10 ? 10 : numberFound;
            const returnList = [];
            let i = 0;
            while (i < numberToGet) {
                const foundItem = sortedBooks[i];
                console.log(foundItem.volumeInfo.averageRating);
                // console.log(foundItem.volumeInfo.ratingsCount);
                const returnObject = {
                    id: foundItem.id,
                    title: foundItem.volumeInfo && foundItem.volumeInfo.title,
                    mediaType: 'book',
                    image: foundItem.volumeInfo && foundItem.volumeInfo.imageLinks
                        && foundItem.volumeInfo.imageLinks.thumbnail,
                    genres: foundItem.volumeInfo && foundItem.volumeInfo.categories,
                    blurb: foundItem.volumeInfo && foundItem.volumeInfo.description,
                    people: foundItem.volumeInfo && foundItem.volumeInfo.authors,
                    publishedDate: foundItem.volumeInfo && foundItem.volumeInfo.publishedDate,
                    avgRating : foundItem.volumeInfo && foundItem.volumeInfo.averageRating
                }
                returnList.push(returnObject);
                i++;
            }
            //console.log('Succeeded getting book from googleBooks:', returnList);
            res.status(200).json(returnList);
        })
        .catch((error) => console.log(error));
});


module.exports = router;
