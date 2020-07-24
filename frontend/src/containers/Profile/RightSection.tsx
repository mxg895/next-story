import React from 'react';
import RegWidthCarousel from '../../components/RegWidthCarousel';
import styled from 'styled-components';
import TagsSection from '../../components/TagsSection';
import Typography from '@material-ui/core/Typography';
import { Tag } from '../../constants/dataTypes';

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

const RightSection: React.FC<RightSectionProps> = ({ favoriteAuthors, favoriteDirectors, favoriteGenres, favoriteNextStoryTags}) => {
  return (
    <StyledDiv>
      <>
        <SubSectionContainer>
          <Typography variant='h4'>Favourite Genres</Typography>
          <TagsSection tags={[...favoriteGenres]} />
          <TagsSection tagObjects={[...favoriteNextStoryTags]}/>
        </SubSectionContainer>
        <SubSectionContainer>
          <Typography variant='h4'>Favourite Authors/Directors:</Typography>
          <TagsSection tags={[...favoriteAuthors, ...favoriteDirectors]} />
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

interface RightSectionProps {
  favoriteAuthors: string[];
  favoriteBooks: string[];
  favoriteDirectors: string[];
  favoriteGenres: string[];
  favoriteMovies: string[];
  favoriteNextStoryTags: Tag[];
  readLater: string[];
  type: string;
  userId: string;
  watchLater: string[];
  _id: string;
}

export default RightSection;
