import React, {useState} from 'react';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';
import Button from '../Button';
import {connect} from 'react-redux';
import {deleteReviewAction} from '../../actions/mediaActions';
import CommentEditor, {CommentEditorAction} from '../CommentEditor';

interface CommentBlockProps {
    review: any,
    mediaType: 'movie' | 'book',
    mediaId: string
}

const Review = styled.div`
    border-top: 2px solid ${({ theme }) => theme.palette.grey[400]};
    min-height: 50px;
    padding: 5px;
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
`;

function deleteReview(props: any) {
    const { mediaType, mediaId } = props;
    const userId = props.review.userId;
    props.deleteReviewAction({mediaId: mediaId, mediaType: mediaType, userId: userId});
}

const CommentBlock: React.FC<CommentBlockProps> = (props: CommentBlockProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const { review } = props;
    const date = new Date(review.datePosted).toDateString();
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
                <>
                    <TopBar>
                        <Typography variant={'h5'}><strong>{review.userName}</strong> on {date}</Typography>
                        <div>
                            <Button onClick={() => setIsEdit(true)}>Edit</Button>
                            <Button onClick={() => deleteReview(props)}>Delete</Button>
                        </div>
                    </TopBar>
                    <Typography variant={'subtitle2'} gutterBottom>User rating: 0</Typography>
                    <Typography variant={'body1'} gutterBottom>{ review.text }</Typography>
                </>}
            </Review>
        </>
    );
};

export default connect(null, { deleteReviewAction })(CommentBlock);
