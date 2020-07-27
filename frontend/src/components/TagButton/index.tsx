import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router';
import {SingleQueryType} from '../../constants/dataTypes';

interface TagsButtonProps {
    label: string;
    singleQueryType: SingleQueryType;
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
    const { label, singleQueryType } = props;
    const history = useHistory();

    const goToSingleQuery = () => {
        history.push(`/searchResult/param?singleQueryType=${singleQueryType}&query=${label}`);
    };

    return (
        <>
            {label &&
                <StyledTagButton
                    onClick={goToSingleQuery}
                >
                    {label}
                </StyledTagButton>
            }
        </>
    );
};

export default TagButton;
