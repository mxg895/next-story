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
    var favoriteMedia = '';
    console.log(mediaType);
    console.log(mediaId);
    if(mediaType.includes("movie")){
        favoriteMedia = 'favoriteMovies';
    } else{
        favoriteMedia = 'favoriteBooks';
    }
    console.log(favoriteMedia);
    if(action.includes("REMOVE")){
        Profile.findOneAndUpdate({ userId: userId},
            {
                $pull :{
                    [favoriteMedia] : {$in: [mediaId]}
                }},
            { new:true, multi:true })
            .then(user => {
                console.log('Success. Updated user info: ', user.favoriteMovies + '\n' + user.favoriteBooks );
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
                    [favoriteMedia]: mediaId
                }},
            { new:true, multi:true })
            .then(user => {
                console.log('Success. Updated user info: ', user.favoriteMovies + '\n' + user.favoriteBooks);
                res.status(200).json(user);
            })
            .catch((err) => {
                console.log('Error upserting review: ', err);
                res.status(500);
            });
    }
});

module.exports = router;
