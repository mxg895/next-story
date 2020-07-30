import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router';
import {SingleQueryType} from '../../constants/dataTypes';
import {ALL, BOOKS, MOVIES} from '../../constants/homePageFilterConstants';
import {connect} from 'react-redux';
import {changeSingleSearchPageFilter} from '../../actions/singleSearchPageFilterActions';

interface TagsButtonProps {
    label: string;
    singleQueryType: SingleQueryType;
    tagId?: string; // needed for if the tag button is being used for nextStoryTags
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

const changeQueryFilter = (props: any, queryType: SingleQueryType) => {
    switch (queryType) {
        case SingleQueryType.bookPerson:
            props.changeSingleSearchPageFilter(BOOKS);
            break;
        case SingleQueryType.moviePerson:
            props.changeSingleSearchPageFilter(MOVIES);
            break;
        case SingleQueryType.tag:
        case SingleQueryType.genre:
        case SingleQueryType.searchBar:
        default:
            props.changeSingleSearchPageFilter(ALL);
            break;
    }
};

const TagButton: React.FC<TagsButtonProps> = (props: TagsButtonProps) => {
    const { label, tagId, singleQueryType } = props;
    const history = useHistory();

    const encodedSubject = encodeURIComponent(tagId || label);
    const goToSingleQuery = () => {
        changeQueryFilter(props, singleQueryType);
        history.push(`/searchResult/param?singleQueryType=${singleQueryType}&query=${encodedSubject}`);
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

export default connect(null, {changeSingleSearchPageFilter})(TagButton);
