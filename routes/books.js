var express = require('express');
var router = express.Router();
const Books = require('../models/book');
const fetch = require('node-fetch');

router.get('/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    let book = {};
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
});

router.get('/tags/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    Books.findOne({ bookId: bookId }).then(book => {
        console.log('Got a book', book);
        const retBook = {
            bookId: bookId,
            nextStoryTags: book.nextStoryTags
        }
        res.status(200).json(retBook);
    }).catch((err) => {
        console.log('Error fetching book from mongodb: ', err);
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

router.get('/withTag/:tagId', (req, res) => {
    const tagId = req.params.tagId;
    Books.find({
        "nextStoryTags.tagId": tagId
    }).then(books => {
        console.log('Got books', books, 'for tag', tagId);
        res.status(200).json(books);
    }).catch((err) => {
        console.log('Error fetching movies for tag: ', err);
        res.status(500);
    });
});

router.get('/withTags/:tags', (req, res) => {
    const tags = req.params.tags.split('&');
    Books.find({
        "nextStoryTags.tagId": { $all: tags}
    }).then(movies => {
        console.log('Got books', movies);
        res.status(200).json(movies);
    }).catch((err) => {
        console.log('Error fetching books for tag: ', err);
        res.status(500);
    });
});

module.exports = router;
