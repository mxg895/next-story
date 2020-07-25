var express = require('express');
var router = express.Router();
const Books = require('../models/book');

router.get('/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    Books.findOne({ bookId: bookId })
        .then(book => {
            console.log('Got all a book', book);
            res.status(200).json(book);
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
