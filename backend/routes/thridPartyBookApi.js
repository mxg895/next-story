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
            console.log('Succeeded getting book from openLibrary:', returnList);
            res.status(200).json(returnList);
        })
        .catch((error) => console.log(error));
});

module.exports = router;
