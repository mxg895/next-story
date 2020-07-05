/*
import Profile from "../../frontend/src/containers/Profile";
*/

var express = require('express');
var router = express.Router();
const Profile = require('../models/Profile');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* REMOVE a favorite movies or books. */
router.put('/:mediaType/:mediaId/:userId', (req, res) => {
    const { mediaId,  userId } = req.params;
    const mediaType  = JSON.stringify(req.params.mediaType);
    const action = JSON.stringify(req.body.action);
    console.log(userId);
    console.log(mediaId);
    console.log(mediaType);
    console.log(action.toString());
    console.log(typeof action);
    if(action.includes("REMOVE")){
        Profile.findOneAndUpdate({ userId: userId},
            {
                $pull :{
                    favoriteMovies : {$in: [mediaId]}
                }},
            { new:true, multi:true })
            .then(user => {
                console.log('Success. Updated user info: ', user.favoriteMovies);
                res.status(200).json(user);
            })
            .catch((err) => {
                console.log('Error upserting review: ', err);
                res.status(500);
            });
    } else if(action.includes("ADD")){
        Profile.findOneAndUpdate({ userId: userId},
            {
                $push :{
                    favoriteMovies : mediaId
                }},
            { new:true, multi:true })
            .then(user => {
                console.log('Success. Updated user info: ', user.favoriteMovies);
                res.status(200).json(user);
            })
            .catch((err) => {
                console.log('Error upserting review: ', err);
                res.status(500);
            });
    }
});


// router.delete('/:mediaType/:mediaId/:userId', (req, res) => {
//     const { mediaId, mediaType, userId } = req.params;
//     ReviewRating.deleteOne({ mediaType: mediaType, id: mediaId, userId: userId })
//         .then(result => {
//             console.log('Success. Deleted reviewRating document, count:', result.deletedCount);
//             res.status(200).json(result);
//         })
//         .catch((err) => {
//             console.log('Error deleting reviewRating document: ', err);
//             res.status(500);
//         });
// });

// router.put('/rating', (req, res) => {
//     const { rating, userId, mediaId, mediaType } = req.body;
//     ReviewRating.findOneAndUpdate({ mediaType: mediaType, id: mediaId, userId: userId },
//         { mediaType: mediaType, userId: userId, id: mediaId, rating: rating },
//         { new: true, upsert: true })
//         .then(reviewRating => {
//             console.log('Success. Updated or posted rating: ', reviewRating);
//             res.status(200).json(reviewRating);
//         })
//         .catch((err) => {
//             console.log('Error upserting review: ', err);
//             res.status(500);
//         });
// });


module.exports = router;
