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
    const [currentText, setCurrentText] = useState(props.editCommentProps?.review.text || '');

    const submit = () => {
        const { editCommentProps, addCommentProps } = props;
        switch(props.actionType) {
            case CommentEditorAction.Add:
                props.addReviewAction({
                    text: currentText,
                    userId: addCommentProps.userId,
                    userName: addCommentProps.userName,
                    datePosted: new Date().toDateString()
                } as ReviewObjectType);
                break;
            case CommentEditorAction.Edit:
                const userId = editCommentProps.review.userId;
                const now = new Date().toDateString();
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
