import React, {useEffect, useState} from 'react';
import CommentBlock from '../CommentBlock';
import {connect} from 'react-redux';
import {Typography} from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import CommentEditor, {CommentEditorAction} from '../CommentEditor';
import Button from '../Button';

interface ReviewListProps {
    mediaId: string,
    mediaType: 'movie' | 'book',
    reviews: any[],
}

const ReviewList: React.FC<ReviewListProps> = (props: ReviewListProps) => {
    const [addCommentEditorOpen, setAddCommentEditor] = useState(false);
    const { reviews, mediaId, mediaType } = props;
    const initialStateReviews = reviews?.slice(0,9);
    const [stateReviews, setStateReviews] = useState(initialStateReviews);

    useEffect(() => {
        const rerenderReviews = reviews?.slice(0,9);
        setStateReviews(rerenderReviews);
    }, [reviews]);

    const fetchMoreData = () => {
        setTimeout(() => {
            const currentReviewLength = stateReviews.length;
            const theFetchNum = currentReviewLength + 5;
            const fetchedReviews = reviews.slice(0, theFetchNum);
            setStateReviews(fetchedReviews);
        }, 1000);
    };

    // TODO get username from redux
    const userName = 'tempName';
    const userId = 'tempId';
    const hasAddedReview = false; // TODO figure this out with an api call

    // TODO make pages instead or combine pages with infiniteScroll
    return (
        <>
            <Typography variant={'h3'}>Reviews</Typography>
            {addCommentEditorOpen ?
                <>
                    <Typography variant={'h5'}><strong>{userName}</strong></Typography>
                    <CommentEditor
                        actionType={CommentEditorAction.Add}
                        closeEdit={() => setAddCommentEditor(false)}
                        addCommentProps={{mediaType: mediaType, mediaId: mediaId, userId: userId, userName: userName}}
                    />
                </> :
                <div style={{textAlign: 'right'}}>
                    {!hasAddedReview && <Button onClick={() => setAddCommentEditor(true)}>Add Review</Button>}
                </div>
            }
            <br/>
            {reviews ? <InfiniteScroll
                dataLength={stateReviews.length}
                next={fetchMoreData}
                hasMore={stateReviews.length < reviews.length}
                loader={<h4 style={{textAlign: 'center'}}>Loading more reviews...</h4>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>No more reviews</b>
                    </p>
                }>
                {stateReviews.map((r, index) =>
                    <CommentBlock key={index} review={r} mediaType={mediaType} mediaId={mediaId}/>)}
            </InfiniteScroll> : null}
        </>
    );
};

const mapStateToProps = (state: any) => {
    return { // TODO use ownProps.match.params for movie vs book and for movie/book id
        reviews: state.reviewReducer.movies?.filter((m: any) => m.movieId === '000')[0]?.reviews
    };
};

export default connect(mapStateToProps)(ReviewList);
