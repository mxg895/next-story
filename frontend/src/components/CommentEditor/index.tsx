import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import {connect} from 'react-redux';
import {addReviewAction, editReviewAction, ReviewObjectType} from '../../actions/ratingReviewActions';
import axios from 'axios';

const TextArea = styled.textarea`
    height: 100px;
    width: 99%;
    resize: vertical;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif
`;

export enum CommentEditorAction {
    Add,
    Edit
}

const CommentEditor: React.FC<any> = (props: any) => {
    const [currentText, setCurrentText] = useState(props.editCommentProps?.review.text || '');

    const submit = () => {
        const { editCommentProps, addCommentProps } = props;
        const now = new Date().toString();
        switch(props.actionType) {
            case CommentEditorAction.Add:
                props.addReviewAction({
                    text: currentText,
                    userId: addCommentProps.userId,
                    userName: addCommentProps.userName,
                    datePosted: now,
                    rating: undefined
                } as ReviewObjectType);
                axios.put('http://localhost:9000/reviewRatings/review',
                    {
                        mediaId: addCommentProps.mediaId,
                        mediaType: addCommentProps.mediaType,
                        userName: addCommentProps.userName,
                        userId: addCommentProps.userId,
                        datePosted: now,
                        text: currentText
                    })
                    .then((res: any) => {
                        console.log(res);
                    })
                    .catch((err: any) => {
                        console.log(err);
                    });
                break;
            case CommentEditorAction.Edit:
                const userId = editCommentProps.review.userId;
                props.editReviewAction({
                    text: currentText,
                    userId: userId,
                    userName: editCommentProps.review.userName,
                    datePosted: now
                } as ReviewObjectType);
                break;
            default:
                return;
        }
        props.closeEdit();
    };

    const changeMessageText = (event: any) => {
        setCurrentText(event.target.value);
    };

    // TODO use a better editor - markdown text area? - for the text
    return (
        <>
            <TextArea value={currentText} onChange={changeMessageText}/>
            <div style={{textAlign: 'right'}}>
                <Button onClick={submit}>Submit</Button>
                <Button onClick={props.closeEdit}>Cancel</Button>
            </div>
        </>
    );
};

export default connect(null, { addReviewAction, editReviewAction })(CommentEditor);
