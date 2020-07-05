var express = require('express');
var router = express.Router();
const ReviewRating = require('../models/reviewRating');

// router.get('/', (req, res) => {
//     console.log('got in the path');
//     ReviewRating.find()
//         .then(reviews => {
//             console.log('Got all reviews', reviews);
//             res.status(200).json(reviews);
//         })
//         .catch((err) => {
//             console.log('Error fetching reviews: ', err);
//             res.status(500);
//         });
// });

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

module.exports = router;
