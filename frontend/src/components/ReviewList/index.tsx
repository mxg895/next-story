import React, {useEffect, useState} from 'react';
import CommentBlock from '../CommentBlock';
import {Typography} from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import CommentEditor, {CommentEditorAction} from '../CommentEditor';
import Button from '../Button';
import { MediaType } from '../../constants/dataTypes';
import {connect} from 'react-redux';

interface ReviewListProps {
    mediaId: string,
    mediaType: MediaType,
    reviews: any[],
    // reduxReviews: any[],
}

const ReviewList: React.FC<ReviewListProps> = (props: ReviewListProps) => {
    const [addCommentEditorOpen, setAddCommentEditor] = useState(false);
    const { reviews, mediaId, mediaType } = props;
    // TODO get username from redux
    const userName = 'tempName';
    const userId = 'user-000111';

    let otherUserReviews: any[] = [];
    let currentUserReview;
    reviews.forEach((r) => {
        r.userId === userId ? currentUserReview = r : otherUserReviews.push(r);
    });
    let hasAddedReview = !!currentUserReview;

    const initialStateReviews = otherUserReviews?.slice(0,9);
    const [stateReviews, setStateReviews] = useState(initialStateReviews);

    useEffect(() => {
        const rerenderReviews = otherUserReviews?.slice(0,9);
        setStateReviews(rerenderReviews);
    }, [reviews]);

    const fetchMoreData = () => {
        setTimeout(() => {
            const currentReviewLength = stateReviews.length;
            const theFetchNum = currentReviewLength + 5;
            const fetchedReviews = otherUserReviews.slice(0, theFetchNum);
            setStateReviews(fetchedReviews);
        }, 1000);
    };

    // TODO make pages instead or combine pages with infiniteScroll ... or allow sort / filtering
    return (
        <>
            <Typography variant={'h3'} gutterBottom>
                {reviews?.length || 0} Total Reviews
            </Typography>
            {addCommentEditorOpen ?
                <>
                    <Typography variant={'h5'}><strong>{userName}</strong></Typography>
                    <CommentEditor
                        actionType={CommentEditorAction.Add}
                        closeEdit={() => setAddCommentEditor(false)}
                        addCommentProps={{
                            mediaType: mediaType,
                            mediaId: mediaId,
                            userId: userId,
                            userName: userName
                        }}
                    />
                </> :
                <div style={{textAlign: 'right'}}>
                    {!hasAddedReview &&
                        <Button onClick={() => setAddCommentEditor(true)}>
                            Add Review
                        </Button>
                    }
                </div>
            }
            {currentUserReview &&
                <>
                    <CommentBlock
                        review={currentUserReview}
                        mediaType={mediaType}
                        mediaId={mediaId}
                        userId={userId}
                        isCurrentUserComment={true}
                    />
                </>
            }
            <br/>
            {otherUserReviews ? <InfiniteScroll
                dataLength={stateReviews.length}
                next={fetchMoreData}
                hasMore={stateReviews.length < otherUserReviews.length}
                loader={<h4 style={{textAlign: 'center'}}>Loading more reviews...</h4>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>No more reviews</b>
                    </p>
                }>
                {stateReviews.map((r, index) =>
                    <CommentBlock
                        key={index}
                        review={r}
                        mediaType={mediaType}
                        mediaId={mediaId}
                        userId={userId}
                    />)
                }
            </InfiniteScroll> : null}
        </>
    );
};

const mapStateToProps = (state: any, ownProps: Pick<ReviewListProps, 'mediaId' | 'mediaType'>) => {
    const mediaId = ownProps.mediaId;
    const mediaType = ownProps.mediaType === MediaType.movie ? 'movies' : 'books';
    const idType = ownProps.mediaType === MediaType.movie ? 'movieId' : 'bookId';
    return {
        reviews: state.reviews
    };
};

export default connect(mapStateToProps)(ReviewList);
