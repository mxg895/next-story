import {ADD_REVIEW, DELETE_REVIEW, EDIT_REVIEW, LOAD_REVIEWS_FROM_DB} from '../constants/reviewConstants';

const reviewReducer = (state = [], action: any) => {
    switch (action.type) {
        case EDIT_REVIEW:
            console.log('in review edit');
            let reviewNoEdit: any[] = [];
            let reviewToEdit = {};
            state.forEach((r: any) => {
                if (r.userId !== action.userId) {
                    reviewNoEdit.push(r);
                } else {
                    const editedReview = {
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
            const reviewToAdd = {
                userName: action.userName,
                userId: action.userId,
                text: action.text,
                datePosted: action.datePosted
            };
            const newReviewArray = [reviewToAdd, ...state];
            return newReviewArray;
        case DELETE_REVIEW:
            const filteredReviews = state.filter((r: any) => r.userId !== action.userId);
            return filteredReviews;
        case LOAD_REVIEWS_FROM_DB:
            return action.reviewsArray;
        default:
            return state;
    }
};

export default reviewReducer;
