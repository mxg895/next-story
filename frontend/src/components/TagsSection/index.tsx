import React from 'react';
import TagButton from '../TagButton';
import styled from 'styled-components';
import {SingleQueryType} from '../../constants/dataTypes';

interface TagsSectionProps {
    singleQueryType: SingleQueryType;
    tags?: string[],
    tagObjects?: Array<{ tagId: string, tagName: string }>
}

const StyledTagsSection = styled.div`
    margin-bottom: 15px;
`;

const TagsSection: React.FC<TagsSectionProps> = (props: TagsSectionProps) => {
    const { singleQueryType, tags, tagObjects } = props;
    return (
        <StyledTagsSection>
            { tags && tags.map((tag, index) => {
                return (
                    <TagButton
                        key={index}
                        label={tag}
                        singleQueryType={singleQueryType}
                    />);
            }) }
            { !tags && tagObjects && tagObjects.map((tagObject, index) => {
                return (
                    <TagButton
                        key={index}
                        label={tagObject.tagName}
                        singleQueryType={singleQueryType}
                        tagId={tagObject.tagId}
                    />);
            }) }
        </StyledTagsSection>
    );
};

export default TagsSection;
