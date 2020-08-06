import React, {useEffect, useMemo, useRef, useState} from 'react';
import styled from 'styled-components';
import {Box, Typography} from '@material-ui/core';
import Button from '../Button';
import {connect} from 'react-redux';
import {deleteReviewAction} from '../../actions/reviewRatingActions';
import CommentEditor, {CommentEditorAction} from '../CommentEditor';
import ReactMarkdown from 'react-markdown';
import {hasDivOverflown} from '../../utils/styleHelpers';
import StarRater from '../StarRater';
import axios from 'axios';

interface CommentBlockProps {
    review: any,
    currentUserId: string,
    isCurrentUserComment?: boolean,
    mediaId?: string,
    mediaType?: string,
    userRating?: number | undefined;
}

const Review = styled.div<{ isCurrentUserComment: boolean | undefined }>`
    border-top: ${({ theme }) => `2px solid ${theme.palette.grey[400]}`};
    border: ${({ theme, isCurrentUserComment }) => isCurrentUserComment && `2px solid ${theme.palette.grey[400]}`};
    min-height: 50px;
    padding: 5px;
    padding-bottom: 0px;
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ExpandableDiv = styled.div<{ expanded: boolean }>`
    max-height: ${(props) => props.expanded ? '' : '200px'};
    overflow: ${(props) => props.expanded ? 'visible' : 'hidden'};
    position: relative;
`;

const ShowMoreButton = styled.button`
    border: none;
    box-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);
    outline: none;
    background-color: rgba(255, 255, 255, 0.75);
    text-align: center;
    height: 30px;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0px;
    width: 100%;
    backdrop-filter: blur(1.5px);
`;

const ShowLessButton = styled.button`
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.90);
    text-align: center;
    height: 30px;
    cursor: pointer;
    padding: 0px;
    width: 100%;
    &:hover {
        background-color: ${({ theme }) => theme.palette.grey[200]};
    }
    margin-bottom: 5px;
`;

const VerticallyCenteredDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

function deleteReview(props: any) {
    const userId = props.review.userId;
    const reviewUserName = props.review.userName;
    props.deleteReviewAction(userId);
    if (props.userRating) { // if a rating exists, don't delete from db
        axios.put('/reviewRatings/review',
            {
                mediaId: props.mediaId,
                mediaType: props.mediaType,
                userName: reviewUserName,
                userId: userId,
                datePosted: '',
                text: ''
            })
            .then((res: any) => {
            })
            .catch((err: any) => {
            });
    } else { // if no rating, then delete whole reviewRating document from db
        axios.delete(`/reviewRatings`
        + `/${props.mediaType}/${props.mediaId}/${props.review.userId}`)
            .then((res: any) => {
            })
            .catch((err: any) => {
            });
    }
}

const CommentBlock: React.FC<CommentBlockProps> = (props: CommentBlockProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [hasOverflow, setHasOverflow] = useState(false);
    const expandableRef = useRef(null);
    const { review, currentUserId, isCurrentUserComment } = props;
    const date = new Date(review.datePosted).toDateString();

    const isAuthor = useMemo(() => {
        return currentUserId === review.userId;
    }, [review, currentUserId]);

    useEffect(() => {
        const isOverflowing = hasDivOverflown(expandableRef);
        if (isOverflowing) {
            setHasOverflow(true);
        } else {
            setHasOverflow(false);
        }
    }, [review]);

    return (
        <>
            <Review isCurrentUserComment={isCurrentUserComment}>
            {isEdit ?
                <>
                    <Typography variant={'h5'}><strong>{review.userName}</strong></Typography>
                    <CommentEditor
                        actionType={CommentEditorAction.Edit}
                        closeEdit={() => setIsEdit(false)}
                        editCommentProps={props}
                    />
                </>
                :
                <ExpandableDiv expanded={expanded} ref={expandableRef}>
                    <TopBar>
                        <Typography variant={'h5'}>
                            <strong>
                                {review.userName}
                            </strong>
                            {` on ${date}`}
                        </Typography>
                        {isAuthor &&
                            <div>
                                <Button onClick={() => setIsEdit(true)}>Edit</Button>
                                <Button onClick={() => deleteReview(props)}>Delete</Button>
                            </div>
                        }
                    </TopBar>
                    <VerticallyCenteredDiv>
                        <Box mr={1}>User rated: </Box>
                        {review.rating ?
                            <StarRater readonly readOnlyRating={review.rating} hideReadOnlyLabel />
                            : 'no rating'
                        }
                    </VerticallyCenteredDiv>
                    <ReactMarkdown source={review.text} />
                    {!expanded && hasOverflow &&
                        <ShowMoreButton onClick={() => setExpanded(true)}>
                            <Typography variant={'body1'}>Show more...</Typography>
                        </ShowMoreButton>
                    }
                    {expanded &&
                        <ShowLessButton onClick={() => setExpanded(false)}>
                            <Typography variant={'body1'}>Show less</Typography>
                        </ShowLessButton>
                    }
                </ExpandableDiv>}
            </Review>
        </>
    );
};

export default connect(null, { deleteReviewAction })(CommentBlock);
