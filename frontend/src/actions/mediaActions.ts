import { ADD_REVIEW, DELETE_MEDIA_REVIEW, EDIT_REVIEW } from '../constants/mediaConstants';
import { MediaType } from '../constants/dataTypes';

export interface ReviewObjectType {
    mediaType: MediaType,
    mediaId: string,
    reviewText: string,
    userId: string,
    userName: string,
    datePosted: string,
}
interface DeleteReviewObjectType {
    mediaType: MediaType,
    mediaId: string,
    userId: string,
}

export const addReviewAction = (reviewObject: ReviewObjectType) => {
    return {
        type: ADD_REVIEW,
        mediaType: reviewObject.mediaType,
        mediaId: reviewObject.mediaId,
        reviewText: reviewObject.reviewText,
        userId: reviewObject.userId,
        userName: reviewObject.userName,
        datePosted: reviewObject.datePosted
    };
};

export const deleteReviewAction = (deletReviewObj: DeleteReviewObjectType) => {
    return {
        type: DELETE_MEDIA_REVIEW,
        mediaType: deletReviewObj.mediaType,
        mediaId: deletReviewObj.mediaId,
        userId: deletReviewObj.userId
    };
};

export const editReviewAction = (reviewObject: ReviewObjectType) => {
    return {
        type: EDIT_REVIEW,
        mediaType: reviewObject.mediaType,
        mediaId: reviewObject.mediaId,
        reviewText: reviewObject.reviewText,
        userId: reviewObject.userId,
        datePosted: reviewObject.datePosted
    };
};
