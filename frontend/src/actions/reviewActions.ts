import { ADD_REVIEW, DELETE_REVIEW, EDIT_REVIEW, LOAD_REVIEWS_FROM_DB } from '../constants/reviewConstants';

export interface ReviewObjectType {
    text: string,
    userId: string,
    userName: string,
    datePosted: string,
    rating: number
}

export const loadAllReviewsAction = (reviewsArray: any[]) => {
    return {
        type: LOAD_REVIEWS_FROM_DB,
        reviewsArray: reviewsArray
    };
};

export const addReviewAction = (reviewObject: ReviewObjectType) => {
    return {
        type: ADD_REVIEW,
        text: reviewObject.text,
        userId: reviewObject.userId,
        userName: reviewObject.userName,
        datePosted: reviewObject.datePosted
    };
};

export const deleteReviewAction = (userId: string) => {
    return {
        type: DELETE_REVIEW,
        userId: userId
    };
};

export const editReviewAction = (reviewObject: ReviewObjectType) => {
    return {
        type: EDIT_REVIEW,
        text: reviewObject.text,
        userId: reviewObject.userId,
        userName: reviewObject.userName,
        datePosted: reviewObject.datePosted
    };
};
