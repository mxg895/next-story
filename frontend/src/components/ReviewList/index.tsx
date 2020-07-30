import React, {useEffect, useState} from 'react';
import CommentBlock from '../CommentBlock';
import {Typography} from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import CommentEditor, {CommentEditorAction} from '../CommentEditor';
import Button from '../Button';
import { MediaType } from '../../constants/dataTypes';
import {connect} from 'react-redux';
import Select from '@material-ui/core/Select';

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

    const [stateReviews, setStateReviews] = useState<Array<any>>([]);
    const [stateOtherUserReviews, setStateOtherUserReviews] = useState<Array<any>>([]);

    const [dateOrRatingSort, setDateOrRatingSort] = useState<'date' | 'rating'>('date');
    const [sortDirection, setSortDirection] = useState<'lowest' | 'highest' | 'recent' | 'old'>('recent');

    useEffect(() => {
        setStateOtherUserReviews(otherUserReviews);
        const rerenderReviews = otherUserReviews?.slice(0, 9);
        setStateReviews(rerenderReviews);
    }, [otherUserReviews]);

    const fetchMoreData = () => {
        setTimeout(() => {
            const currentReviewLength = stateReviews.length;
            const theFetchNum = currentReviewLength + 5;
            const fetchedReviews = stateOtherUserReviews.slice(0, theFetchNum);
            setStateReviews(fetchedReviews);
        }, 1000);
    };

    useEffect(() => {
        let sortedOtherReviews = [];
        switch (sortDirection) {
            case 'lowest':
            case 'highest':
                sortedOtherReviews = stateOtherUserReviews.sort(function(a, b) {
                    if(a.rating === b.rating) {
                        const aDate = a.datePosted && new Date(a.datePosted);
                        const bDate = b.datePosted && new Date(b.datePosted);
                        if(aDate > bDate) {
                            return -1;
                        }
                        if(aDate < bDate) {
                            return 1;
                        }
                        return 0;
                    }
                    if(!a.rating) {
                        return 1;
                    }
                    if(!b.rating) {
                        return -1;
                    }
                    if (sortDirection === 'highest') {
                        return a.rating < b.rating ? 1 : -1;
                    }
                    else {
                        return a.rating < b.rating ? -1 : 1;
                    }
                });
                break;
            case 'recent':
            case 'old':
                sortedOtherReviews = stateOtherUserReviews.sort(function(a, b) {
                    const aDate = a.datePosted && new Date(a.datePosted);
                    const bDate = b.datePosted && new Date(b.datePosted);
                    if(aDate > bDate) {
                        return sortDirection === 'recent' ? -1 : 1;
                    }
                    if(aDate < bDate) {
                        return sortDirection === 'recent' ? 1 : -1;
                    }
                    return 0;
                });
                break;
            default:
                break;
        }
        const slicedSortedReviews = sortedOtherReviews.slice(0, 9);
        setStateReviews([...slicedSortedReviews]);
    }, [stateOtherUserReviews, sortDirection, dateOrRatingSort]);

    const onSortTypeChange = (event: any) => {
        setDateOrRatingSort(event.target.value);
        if (event.target.value === 'date') {
            setSortDirection('recent');
        }
        if (event.target.value === 'rating') {
            setSortDirection('highest');
        }
    };

    const onSortDirectionChange = (event: any) => {
        setSortDirection(event.target.value);
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
                            userName: userName,
                            userRating: userRating
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
            {otherUserReviews && otherUserReviews.length > 0 &&
                <>
                    <div>
                        <Select variant='outlined'
                                native
                                style={{ marginBottom: '5px', marginRight: '5px' }}
                                onChange={onSortTypeChange}
                        >
                            <option value={'date'}>Date</option>
                            <option value={'rating'}>Rating</option>
                        </Select>
                        <Select
                            variant='outlined'
                            native
                            style={{ marginBottom: '5px' }}
                            onChange={onSortDirectionChange}
                            value={sortDirection}
                        >
                            <option
                                value={dateOrRatingSort === 'date' ? 'recent' : 'highest'}
                            >
                                {dateOrRatingSort === 'date' ? 'Recent' : 'Highest'}
                            </option>
                            <option
                                value={dateOrRatingSort === 'date' ? 'old' : 'lowest'}
                            >
                                {dateOrRatingSort === 'date' ? 'Old' : 'Lowest'}
                            </option>
                        </Select>
                    </div>
                    <InfiniteScroll
                        dataLength={stateReviews.length}
                        next={fetchMoreData}
                        hasMore={stateReviews.length < otherUserReviews.length}
                        loader={<h4 style={{textAlign: 'center'}}>Loading more reviews...</h4>}
                        scrollThreshold={1}
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
                    </InfiniteScroll>
                </>
            }
        </>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    const reviews = state.reviewRatings.filter((r: any) => r.text);
    let otherUserReviews: any[] = [];
    let currentUserReview: any = undefined;
    reviews.forEach((r: any) => {
        r.userId === ownProps.userId ? currentUserReview = r : otherUserReviews.push(r);
    });
    return {
        otherUserReviews: otherUserReviews,
        currentUserReview: currentUserReview
    };
};

export default connect(mapStateToProps)(ReviewList);
