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

module.exports = router;
