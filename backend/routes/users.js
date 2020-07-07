/*
import Profile from "../../frontend/src/containers/Profile";
*/

var express = require('express');
var router = express.Router();
const Profile = require('../models/Profile');

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
    const userId = req.params.userId;
    Profile.findOne({ userId : userId })
        .then((user) => {
            console.log(user);
            res.status(200).json(user);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        })
});

router.get('/userLists/:userId', function(req, res, next) {
    const userId = req.params.userId;
    Profile.findOne({ userId : userId })
        .then((user) => {
            const lists = {
                booksRead: user.booksRead,
                moviesWatched: user.moviesWatched,
                watchLater: user.watchLater,
                readLater: user.readLater,
                favoriteMovies: user.favoriteMovies,
                favoriteBooks: user.favoriteBooks,
                favoriteAuthors: user.favoriteAuthors,
                favoriteDirectors: user.favoriteDirectors
            };
            console.log(lists);
            res.status(200).json(lists);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
        })
});

/* REMOVE a favorite movies or books. */
router.put('/:key/:mediaId/:userId', (req, res) => {
    const { mediaId,  userId, key } = req.params;
    const action = JSON.stringify(req.body.action);
    console.log(key);
    console.log(mediaId);
    if(action.includes("REMOVE")){
        Profile.findOneAndUpdate({ userId: userId},
            {
                $pull :{
                    [key] : {$in: [mediaId]}
                }},
            { new:true, multi:true })
            .then(user => {
                console.log('Success. Updated user info: ', user[key] );
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
                    [key]: mediaId
                }},
            { new:true, multi:true })
            .then(user => {
                console.log('Success. Updated user info: ', user[key]);
                res.status(200).json(user);
            })
            .catch((err) => {
                console.log('Error upserting review: ', err);
                res.status(500);
            });
    }
});

module.exports = router;
