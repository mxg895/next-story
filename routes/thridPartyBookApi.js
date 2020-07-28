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
router.get('/googleBooks/searchOneById/:query', (req, res) => {
    const id = req.params.query;
    axios.get(` https://www.googleapis.com/books/v1/volumes?q=${id}`)
        .then((response) => {
            console.log(response);
            const foundItem = response.data.items[0];
            if (foundItem && foundItem.id === id) {
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
            } else {
                res.status(404).json({ message: 'Book not found' });
            }
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

// gets a first 10 books of this subject, needs to add &startIndex=${startIndex}
// to get results past first 10 in increments of 10 starting from the startIndex
router.get('/googleBooks/singleQuery/:queryType/:subject/:startIndex/:increaseIndexBy', (req, res) => {
    const queryType = req.params.queryType;
    const subject = req.params.subject;
    const startIndex = req.params.startIndex
    const increaseIndexBy = req.params.increaseIndexBy;
    let searchSpecify = '';
    switch (queryType) {
        case 'genre':
            searchSpecify = 'subject:';
            break;
        case 'person':
            searchSpecify = 'inauthor:';
            break;
        case 'searchBar':
        default:
            break;
    }
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchSpecify}${subject}&maxResults=${increaseIndexBy}&startIndex=${startIndex}`)
        .then((response) => {
            const books = response.data.items;
            const bookObjectList = books.map((book) => {
                return {
                    id: book.id,
                    title: book.volumeInfo && book.volumeInfo.title,
                    mediaType: 'book',
                    image: book.volumeInfo && book.volumeInfo.imageLinks
                         && book.volumeInfo.imageLinks.thumbnail,
                    genres: book.volumeInfo && book.volumeInfo.categories,
                    blurb: book.volumeInfo && book.volumeInfo.description,
                    people: book.volumeInfo && book.volumeInfo.authors,
                    publishedDate: book.volumeInfo && book.volumeInfo.publishedDate
                }
            });
            res.status(200).json(bookObjectList);
        })
        .catch((error) => console.log(error));
});


module.exports = router;
