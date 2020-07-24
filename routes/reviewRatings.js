var express = require('express');
var router = express.Router();
const ReviewRating = require('../models/reviewRating');

router.get('/:mediaType/:mediaId', (req, res) => {
    const mediaType = req.params.mediaType;
    const mediaId = req.params.mediaId;
    ReviewRating.find({ mediaType: mediaType, id: mediaId })
        .then(reviews => {
            console.log('Got reviews for a media', reviews);
            let sum = 0;
            let numberOfRatings = 0;
            reviews.forEach((r) => {
                if (r.rating) {
                    sum = sum + r.rating;
                    numberOfRatings++;
                }
            });
            const averageRating = sum / numberOfRatings;
            const reviewObject = {
                average: averageRating,
                reviewArray: reviews
            }
            res.status(200).json(reviewObject);
        })
        .catch((err) => {
            console.log('Error fetching reviews: ', err);
            res.status(500);
        });
});

router.put('/review', (req, res) => {
    const { mediaId, mediaType, datePosted, text, userName, userId } = req.body;
    ReviewRating.findOneAndUpdate(
        { mediaType: mediaType, id: mediaId, userId: userId },
        {
                mediaType: mediaType,
                id: mediaId,
                text: text,
                datePosted: datePosted,
                userName: userName,
                userId: userId
            },
        { new: true, upsert: true })
        .then(reviewRating => {
            console.log('Success. Updated or posted review: ', reviewRating);
            res.status(200).json(reviewRating);
        })
        .catch((err) => {
            console.log('Error upserting review: ', err);
            res.status(500);
        });
});

router.put('/rating', (req, res) => {
    const { rating, userId, mediaId, mediaType } = req.body;
    ReviewRating.findOneAndUpdate({ mediaType: mediaType, id: mediaId, userId: userId },
        { mediaType: mediaType, userId: userId, id: mediaId, rating: rating },
        { new: true, upsert: true })
        .then(reviewRating => {
            console.log('Success. Updated or posted rating: ', reviewRating);
            res.status(200).json(reviewRating);
        })
        .catch((err) => {
            console.log('Error upserting review: ', err);
            res.status(500);
        });
});

router.delete('/:mediaType/:mediaId/:userId', (req, res) => {
    const { mediaId, mediaType, userId } = req.params;
    ReviewRating.deleteOne({ mediaType: mediaType, id: mediaId, userId: userId })
        .then(result => {
            console.log('Success. Deleted reviewRating document, count:', result.deletedCount);
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log('Error deleting reviewRating document: ', err);
            res.status(500);
        });
});

module.exports = router;
