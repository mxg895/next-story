var express = require('express');
var router = express.Router();
const NextStoryTags = require('../models/nextStoryTag');

router.get('/', (req, res) => {
    NextStoryTags.find()
        .then(tags => {
            const sortedTags = tags.sort(function(a, b) {
                if(a.tagName < b.tagName) { return -1; }
                if(a.tagName > b.tagName) { return 1; }
                return 0;
            });
            res.status(200).json(sortedTags);
        })
        .catch((err) => {
            console.log('Error fetching all tags: ', err);
            res.status(500);
        });
});

router.get('/:tagId', (req, res) => {
    const tagId = req.params.tagId;
    NextStoryTags.findById(tagId)
        .then(tag => {
            res.status(200).json(tag);
        })
        .catch((err) => {
           console.log('error fetching a tag: ', err);
           res.status(500);
        });
});

module.exports = router;
