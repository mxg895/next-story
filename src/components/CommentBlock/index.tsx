import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';
import Button from '../Button';
import {connect} from 'react-redux';
import {deleteReviewAction} from '../../actions/mediaActions';
import CommentEditor, {CommentEditorAction} from '../CommentEditor';
import ReactMarkdown from 'react-markdown';
import {hasDivOverflown} from '../../utils/styleHelpers';

interface CommentBlockProps {
    review: any,
    mediaType: 'movie' | 'book',
    mediaId: string
}

const Review = styled.div`
    border-top: 2px solid ${({ theme }) => theme.palette.grey[400]};
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

function deleteReview(props: any) {
    const { mediaType, mediaId } = props;
    const userId = props.review.userId;
    props.deleteReviewAction({mediaId: mediaId, mediaType: mediaType, userId: userId});
}

const CommentBlock: React.FC<CommentBlockProps> = (props: CommentBlockProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [hasOverflow, setHasOverflow] = useState(false);
    const expandableRef = useRef(null);
    const { review } = props;
    const date = new Date(review.datePosted).toDateString();

    useEffect(() => {
        const isOverflowing = hasDivOverflown(expandableRef);
        if (isOverflowing) {
            setHasOverflow(true);
        }
    }, []);
    // TODO only show the edit and delete buttons if the userId matches with the current user's id
    return (
        <>
            <Review>
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
                        <Typography variant={'h5'}><strong>{review.userName}</strong> on {date}</Typography>
                        <div>
                            <Button onClick={() => setIsEdit(true)}>Edit</Button>
                            <Button onClick={() => deleteReview(props)}>Delete</Button>
                        </div>
                    </TopBar>
                    <Typography variant={'subtitle2'} gutterBottom>User rating: 0</Typography>
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
