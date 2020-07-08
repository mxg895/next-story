// import Container from '@material-ui/core/Container';
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import RegWidthCarousel from '../../components/RegWidthCarousel';
import styled from 'styled-components';
// import useTheme from '@material-ui/core/styles/useTheme';
// import ReadWatchedList from '../../components/Search';

const StyledDiv = styled.div`
  max-width: calc(100% - 400px);
  > * {
    :not(:first-child) {
      margin-top: 30px;
    }
  }
`;

const RightSection: React.FC = () => {
  const largeScreens = useMediaQuery('(min-width:960px)');
  return (
    <StyledDiv>
      {largeScreens &&
        <>
          <RegWidthCarousel title={`User's Favourite Books:`}/>
          <RegWidthCarousel title={'Favourite Genres:'}/>
          <RegWidthCarousel title={'Favourite Authors/Studios:'}/>
          <RegWidthCarousel title={`User's Read/Watched List`} withSearchSelect/>
        </>
      }
    </StyledDiv>
  );
};

export default RightSection;
