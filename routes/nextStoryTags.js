var express = require('express');
var router = express.Router();
const NextStoryTags = require('../models/nextStoryTag');

router.get('/', (req, res) => {
    NextStoryTags.find()
        .then(tags => {
            console.log('got all tags', tags);
            res.status(200).json(tags);
        })
        .catch((err) => {
            console.log('Error fetching all tags: ', err);
            res.status(500);
        });
});

router.get('/:tagId', (req, res) => {
    const tagId = req.params.tagId;
    console.log('tagId', tagId);
    NextStoryTags.findById(tagId)
        .then(tag => {
            console.log('got a tag', tag);
            res.status(200).json(tag);
        })
        .catch((err) => {
           console.log('error fetching a tag: ', err);
           res.status(500);
        });
});

module.exports = router;
