var express = require('express');
var router = express.Router();
const Books = require('../models/book');
const fetch = require('node-fetch');

router.get('/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    Books.findOne({ bookId: bookId })
        .then(book => {
            console.log('Got a book', book);
            if(book!==null){
                book = book.toObject();
            }
            else{
                book = {};
            }
            fetch('https://www.googleapis.com/books/v1/volumes/' + bookId)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    const foundItem = data;
                        book.id= foundItem.id;
                        book.title= foundItem.volumeInfo && foundItem.volumeInfo.title;
                        book.mediaType= 'book';
                        book.image = foundItem.volumeInfo && foundItem.volumeInfo.imageLinks
                            && foundItem.volumeInfo.imageLinks.thumbnail;
                        book.genres = foundItem.volumeInfo && foundItem.volumeInfo.categories;
                        book.blurb = foundItem.volumeInfo && foundItem.volumeInfo.description;
                        book.people = foundItem.volumeInfo && foundItem.volumeInfo.authors;
                        book.publishedDate = foundItem.volumeInfo && foundItem.volumeInfo.publishedDate;

                    console.log('Succeeded getting book from googleBooks:', book);
                    res.status(200).json(book);
                }).catch((error) => console.log(error));
        })
        .catch((err) => {
            console.log('Error fetching book: ', err);
            res.status(500);
        });
});

router.put('/updateNextStoryTags/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    const { tagsArray } = req.body;
    let query = { bookId: bookId };
    let update = {
        $setOnInsert: {bookId:  bookId},
        nextStoryTags: tagsArray // or $push
    }
    Books.findOneAndUpdate(query, update, {upsert:true})
        .then(book => {
            console.log('the updated book: ', book);
            res.status(200).json(book);
    }).catch((err) => {
        console.log('Error deleting a nextStoryTag from a book: ', err);
        res.status(500);
    });
});

module.exports = router;
