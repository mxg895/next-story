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
    otherUserReviews: any[],
    currentUserReview?: any,
    userId: string,
    userName: string,
    userRating?: number | undefined
}

const ReviewList: React.FC<ReviewListProps> = (props: ReviewListProps) => {
    const [addCommentEditorOpen, setAddCommentEditor] = useState(false);
    const { otherUserReviews, currentUserReview, mediaId, mediaType, userId, userName, userRating } = props;

    let hasAddedReview = !!currentUserReview;

    const initialStateReviews = otherUserReviews?.slice(0,9);
    const [stateReviews, setStateReviews] = useState(initialStateReviews);

    useEffect(() => {
        const rerenderReviews = otherUserReviews?.slice(0,9);
        setStateReviews(rerenderReviews);
    }, [otherUserReviews]);

    const fetchMoreData = () => {
        setTimeout(() => {
            const currentReviewLength = stateReviews.length;
            const theFetchNum = currentReviewLength + 5;
            const fetchedReviews = otherUserReviews.slice(0, theFetchNum);
            setStateReviews(fetchedReviews);
        }, 1000);
    };

    const totalReviews = hasAddedReview ? otherUserReviews.length + 1 : otherUserReviews.length;

    return (
        <>
            <Typography variant={'h3'} gutterBottom>
                {totalReviews || 0} Total Reviews
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
            {currentUserReview && currentUserReview.text &&
                <>
                    <CommentBlock
                        review={currentUserReview}
                        currentUserId={userId}
                        isCurrentUserComment={true}
                        mediaId={mediaId}
                        mediaType={mediaType}
                        userRating={userRating}
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
                        currentUserId={userId}
                    />)
                }
            </InfiniteScroll> : null}
        </>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    const reviews = state.reviews.filter((r: any) => r.text);
    let otherUserReviews: any[] = [];
    let currentUserReview: any;
    reviews.forEach((r: any) => {
        r.userId === ownProps.userId ? currentUserReview = r : otherUserReviews.push(r);
    });
    return {
        otherUserReviews: otherUserReviews,
        currentUserReview: currentUserReview
    };
};

export default connect(mapStateToProps)(ReviewList);
