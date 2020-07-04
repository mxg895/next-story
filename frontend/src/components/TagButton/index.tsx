import React from 'react';
import styled from 'styled-components';

interface TagsButtonProps {
    tag: string;
}

const StyledTagButton = styled.button`
    border-radius: 7px;
    color: white;
    outline: none;
    border: none;
    margin: 5px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.primary.light};
    &:hover {
        background-color: ${({ theme }) => theme.palette.secondary.light};
    }
    font-size: 16px;
    padding: 3px 5px 3px 5px;
`;

const TagButton: React.FC<TagsButtonProps> = (props: TagsButtonProps) => {
    const { tag } = props;
    return (
        <>
            {tag && <StyledTagButton>{tag}</StyledTagButton>}
        </>
    );
};

export default TagButton;
