import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import {connect} from 'react-redux';
import {addReviewAction, editReviewAction, ReviewObjectType} from '../../actions/reviewActions';

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
    const [currentText, setCurrentText] = useState(props.commentProps?.review.text || '');

    const submit = () => {
        const { editCommentProps, addCommentProps } = props;
        switch(props.actionType) {
            case CommentEditorAction.Add:
                props.addReviewAction({
                    mediaType: addCommentProps.mediaType,
                    mediaId: addCommentProps.mediaId,
                    reviewText: currentText,
                    userId: addCommentProps.userId,
                    userName: addCommentProps.userName,
                    datePosted: new Date().toDateString()
                } as ReviewObjectType);
                break;
            case CommentEditorAction.Edit:
                const userId = editCommentProps.review.userId;
                props.editReviewAction({
                    mediaType: editCommentProps.mediaType,
                    mediaId: editCommentProps.mediaId,
                    reviewText: currentText,
                    userId: userId,
                    userName: editCommentProps.review.userName,
                    datePosted: new Date().toDateString()
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

    // TODO use Markdown for the text
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
