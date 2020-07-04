import React from 'react';
import TagButton from '../TagButton';
import styled from 'styled-components';

interface TagsSectionProps {
    tags?: string[],
    tagObjects?: Array<{ tagId: string, tagName: string }>
}

const StyledTagsSection = styled.div`
    margin-bottom: 15px;
`;

const TagsSection: React.FC<TagsSectionProps> = (props: TagsSectionProps) => {
    const { tags, tagObjects } = props;
    return (
        <StyledTagsSection>
            { tags && tags.map((tag, index) => <TagButton key={index} tag={tag}/>) }
            { !tags && tagObjects && tagObjects.map((tagObject, index) => <TagButton key={index} tag={tagObject.tagName}/>) }
        </StyledTagsSection>
    );
};

export default TagsSection;
