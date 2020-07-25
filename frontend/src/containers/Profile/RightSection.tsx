import React from 'react';
import RegWidthCarousel from '../../components/RegWidthCarousel';
import styled from 'styled-components';
import TagsSection from '../../components/TagsSection';
import Typography from '@material-ui/core/Typography';
import { Tag } from '../../constants/dataTypes';
import { connect } from 'react-redux';
import { CombinedMoviesBooksInfo } from '../../constants/BooksMoviesActionTypes';
import { Dispatch } from 'redux';
import { updateFavorites, updateLaterList } from '../../actions/booksMoviesActions';

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

const RightSection: React.FC<RightSectionProps> = ({ favoriteAuthors, favoriteBooks, favoriteDirectors, favoriteGenres, favoriteMovies, favoriteNextStoryTags, readLater, watchLater, setFavorites, setLater}) => {
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
          <RegWidthCarousel bookIds={favoriteBooks} bMSource='favorite' movieIds={favoriteMovies} title={`User's Favourite Books:`} updateMethod={setFavorites}/>
        </SubSectionContainer>
        <SubSectionContainer>
          <RegWidthCarousel bMSource='later' title={`User's Read/Watched List`} bookIds={readLater} movieIds={watchLater} withSearchSelect updateMethod={setLater}/>
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

  setFavorites: (data: CombinedMoviesBooksInfo) => void;
  setLater: (data: CombinedMoviesBooksInfo) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setFavorites: (booksMoviesData: CombinedMoviesBooksInfo) => dispatch(updateFavorites(booksMoviesData)),
    setLater: (booksMoviesData: CombinedMoviesBooksInfo) => dispatch(updateLaterList(booksMoviesData))
  };
};

export default connect(null, mapDispatchToProps)(RightSection);
