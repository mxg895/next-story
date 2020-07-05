import {
    ADD_REVIEW,
    CHANGE_RATING,
    DELETE_REVIEW,
    EDIT_REVIEW,
    LOAD_REVIEWS_FROM_DB
} from '../constants/reviewRatingConstants';

const reviewRatingReducer = (state = [], action: any) => {
    switch (action.type) {
        case EDIT_REVIEW:
            let reviewNoEdit: any[] = [];
            let reviewToEdit = {};
            state.forEach((r: any) => {
                if (r.userId !== action.userId) {
                    reviewNoEdit.push(r);
                } else {
                    const editedReview = {
                        ...r,
                        userName: r.userName,
                        userId: r.userId,
                        text: action.text,
                        datePosted: action.datePosted
                    };
                    reviewToEdit = editedReview;
                }
            });
            const editedReviewList = [reviewToEdit, ...reviewNoEdit];
            return editedReviewList;
        case ADD_REVIEW:
            const reviewRatingObject = state.filter((r: any) => action.userId === r.userId);
            if (reviewRatingObject.length === 0) { // if no object exists
                const reviewToAdd = {
                    userName: action.userName,
                    userId: action.userId,
                    text: action.text,
                    datePosted: action.datePosted
                };
                const newReviewArray = [reviewToAdd, ...state];
                return newReviewArray;
            } else { // if object exists (as a rating)
                return state.map((r: any) => {
                    if (r.userId === action.userId) {
                        return {
                            ...r,
                            text: action.text,
                            datePosted: action.datePosted
                        };
                    } else {
                        return r;
                    }
                });
            }
        case DELETE_REVIEW:
            let filteredReviews: any[] = [];
            state.forEach((r: any) => {
                if (r.userId === action.userId) {
                    if (r.rating !== undefined && r.rating !== 0) {
                        filteredReviews.push({
                            ...r,
                            text: ''
                        });
                    }
                } else {
                    filteredReviews.push(r);
                }
            });
            return [...filteredReviews];
        case LOAD_REVIEWS_FROM_DB:
            return action.reviewsArray;
        case CHANGE_RATING:
            let objectExists = false;
            let changedRatingReviews: any[] = [];
            state.forEach((r: any) => {
                if (r.userId === action.userId) {
                    objectExists = true;
                    if (!(r.text === '' && (action.rating === 0 || action.rating === undefined))) {
                        changedRatingReviews.push({
                            ...r,
                            rating: action.rating
                        });
                    }
                } else { changedRatingReviews.push(r); }
            });
            if (!objectExists) {
                const newReviewRating = {
                    userId: action.userId,
                    userName: action.userName,
                    text: '',
                    datePosted: '',
                    rating: action.rating
                };
                changedRatingReviews = [newReviewRating, ...state];
            }
            return changedRatingReviews;
        default:
            return state;
    }
};

export default reviewRatingReducer;
