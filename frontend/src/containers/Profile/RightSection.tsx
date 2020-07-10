import React from 'react';
import RegWidthCarousel from '../../components/RegWidthCarousel';
import styled from 'styled-components';
import TagsSection from '../../components/TagsSection';
import Typography from '@material-ui/core/Typography';

const StyledDiv = styled.div`
  > * {
    :not(:first-child) {
      margin-top: 30px;
    }
  }
`;

const SubSectionContainer = styled.div`
  min-width: 350px;
  margin: 0 auto;
`;

const RightSection: React.FC = () => {
  return (
    <StyledDiv>
      <>
        <SubSectionContainer>
          <Typography variant='h4'>Favourite Genres</Typography>
          <TagsSection tags={['fantasy', 'action', 'sci-fi', 'superheroes', 'tag1', 'tag2', 'tag3']} />
        </SubSectionContainer>
        <SubSectionContainer>
          <Typography variant='h4'>Favourite Authors/Studios:</Typography>
          <TagsSection tags={['J.K. Rowling', 'Walt Disney Pictures', 'Universal Pictures', 'Some More Tags', 'Another Tag', 'More Tags', 'And Tags', 'Fill Up Space For Multi-line Testing']} />
        </SubSectionContainer>
        <SubSectionContainer>
          <RegWidthCarousel title={`User's Favourite Books:`}/>
        </SubSectionContainer>
        <SubSectionContainer>
          <RegWidthCarousel title={`User's Read/Watched List`} withSearchSelect/>
        </SubSectionContainer>
      </>
    </StyledDiv>
  );
};

export default RightSection;
