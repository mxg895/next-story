const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const Book = require('../models/book');

router.get('/booksAndMovies', async(req, res) => {
  const { books = [], movies = [] } = req.query;
  try {
    const moviesResponse = await Movie.aggregate([
      {
        $match: { movieId:{ $in: movies }}
      },
      {
        $lookup: { from: 'reviewRatings', as: 'rating', let:{ movieId: '$movieId' },
          pipeline:[
            {
              $match: { $expr:{ $eq:['$id', '$$movieId'] }}
            },
            {
              $group: { _id: '$id', avgRating: { $avg: '$rating' }}
            }
          ]
        }
      },
      {
        $replaceRoot: { newRoot:{ $mergeObjects:[{ $arrayElemAt:['$rating', 0] }, '$$ROOT'] }}
      },
      {
        $project: { rating:0 }
      }
    ]).exec();
    const booksResponse = await Book.aggregate([
      {
        $match: { bookId:{ $in: books }}
      },
      {
        $lookup: { from: 'reviewRatings', as: 'rating', let:{ bookId: '$bookId' },
        pipeline:[
          {
            $match: { $expr:{ $eq:['$id', '$$bookId'] }}
          },
          {
            $group: { _id: '$id', avgRating: { $avg: '$rating' }}
          }
        ]
        }
      },
      {
        $replaceRoot: { newRoot:{ $mergeObjects:[{ $arrayElemAt:['$rating', 0] }, '$$ROOT'] }}
      },
      {
        $project: { rating:0 }
      }
    ]).exec();
    res.status(200).json({ books: booksResponse, movies: moviesResponse });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
