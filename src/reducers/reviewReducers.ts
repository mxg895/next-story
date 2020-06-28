import {ADD_REVIEW, DELETE_REVIEW, EDIT_REVIEW} from '../constants/reviewConstants';
import {MediaType} from '../constants/dataTypes';

const books = [{
    bookId: '000',
    genreIds: [],
    nextStoryTags: [],
    reviews: [{'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'}]
}, {
    bookId: '001',
    genreIds: [],
    nextStoryTags: [],
    reviews: [{'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {'text': '', 'userId': '', 'datePosted': 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'}]
}];

const movies = [{
    movieId: '000',
    genreIds: [],
    nextStoryTags: [],
    reviews: [{text: 'worst movie ever', userName: 'name0', userId: '000', datePosted: 'Wed Jun 16 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'terrible movie', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'I liked the main characters', userName: 'name6', userId: '006', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'so-so', userName: 'name7', userId: '007', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'terrible movie', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'terrible movie', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'terrible movie', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'terrible movie', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'terrible movie', userName: 'name1', userId: '001', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'ok I guess', userName: 'name2', userId: '002', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'meh', userName: 'name3', userId: '003', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'wonderful', userName: 'name4', userId: '004', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'},
            {text: 'amazing!!', userName: 'name5', userId: '005', datePosted: 'Wed Jun 17 2020 19:14:30 GMT-0700 (Pacific Daylight Time)'}]
}, {
    movieId: '001',
    genreIds: [],
    nextStoryTags: [],
    reviews: [{text: '', userId: '', datePosted: ''},
            {text: '', userId: '', datePosted: ''},
            {text: '', userId: '', datePosted: ''}]
}];

const mediaReducer = (state = { movies: movies, books: books}, action: any) => {
    const mediaType: MediaType = action.mediaType;
    if (mediaType === MediaType.movie || true) {
        switch (action.type) {
            case EDIT_REVIEW:
                let moviesNoEdit: any[] = [];
                let movieToEdit = {};
                state.movies.forEach((m) => {
                    m.movieId !== action.mediaId ? moviesNoEdit.push(m) : movieToEdit = m;
                });
                const editedReviewsList = (movieToEdit as any)?.reviews.map((r: any) => {
                    if (r.userId === action.userId) {
                        return {
                            userName: r.userName,
                            text: action.reviewText,
                            userId: action.userId,
                            datePosted: action.datePosted
                        };
                    } else {
                        return r;
                    }
                });
                return {
                    ...state,
                    movies: [
                        ...moviesNoEdit,
                        {
                            ...movieToEdit,
                            reviews: editedReviewsList
                        }
                    ]
                };
            case ADD_REVIEW:
                let moviesNoAdd: any[] = [];
                let movieToAddReview = {};
                state.movies.forEach((m) => {
                    m.movieId !== action.mediaId ? moviesNoAdd.push(m) : movieToAddReview = m;
                });
                const addedReviewsList = [
                    {
                        userName: action.userName,
                        text: action.reviewText,
                        userId: action.userId,
                        datePosted: action.datePosted
                    },
                    ...(movieToAddReview as any).reviews];
                return {
                    ...state,
                    movies: [
                        ...moviesNoAdd,
                        {
                            ...movieToAddReview,
                            reviews: addedReviewsList
                        }
                    ]
                };
            case DELETE_REVIEW:
                let otherMovies: any[] = [];
                let movieOfInterest = {};
                state.movies.forEach((m) => {
                    m.movieId !== action.mediaId ? otherMovies.push(m) : movieOfInterest = m;
                });
                const filteredReviewsList = (movieOfInterest as any)?.reviews.filter((r: any) => {
                    return r.userId !== action.userId;
                });
                return {
                    ...state,
                    movies: [
                        ...otherMovies,
                        {
                            ...movieOfInterest,
                            reviews: filteredReviewsList
                        }
                    ]
                };
            default:
                return { ...state };
        }
    } else { // if book
       // stuff
    }

};

export default mediaReducer;
