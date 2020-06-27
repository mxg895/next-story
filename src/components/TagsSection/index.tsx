import React from 'react';
import TagButton from '../TagButton';
import styled from 'styled-components';

interface TagsSectionProps {
    tags: string[];
}

const StyledTagsSection = styled.div`
    margin-bottom: 15px;
`;

const TagsSection: React.FC<TagsSectionProps> = (props: TagsSectionProps) => {
    const { tags } = props;
    return (
        <StyledTagsSection>
            {tags.map((tag, index) => <TagButton key={index} tag={tag}/>)}
        </StyledTagsSection>
    );
};

export default TagsSection;
