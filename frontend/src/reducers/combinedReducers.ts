import { combineReducers } from 'redux';
import reviewRatings from './reviewRatingReducers';
import homePageFilterReducer from './homePageFilterReducer';
import profileReducer from './profileReducers';
import booksMoviesReducers from './booksMoviesReducers';
import singleSearchPageFilterReducer from './singleSearchPageFilterReducer';

const allReducers = combineReducers({
    profile: profileReducer,
    reviewRatings,
    homePageFilterReducer,
    booksMovies: booksMoviesReducers,
    singleSearchPageFilterReducer
});

export default allReducers;
