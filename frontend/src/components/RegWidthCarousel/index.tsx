import Typography from '@material-ui/core/Typography';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MediaCard from '../MediaCard';
import styled from 'styled-components';
import MockCover from '../../assets/MockCover.png';
import SearchBar from '../SearchBar';
import Grid from '@material-ui/core/Grid';
import Select from '../Select';
import { CardData, MediaType } from '../../constants/dataTypes';

const StyledCarousel = styled(Carousel)`
  margin-top: 20px;
`;

const mockCardData: Omit<CardData, 'id'> = {
    title: 'Mock Title Harry Potter Mock Title Harry Potter',
    image: MockCover,
    mediaType: MediaType.movie,
    nextStoryTags: [],
    people: 'J.K. Rowling',
    tags: ['fantasy', 'action', 'sci-fi', 'superheroes', 'tag1', 'tag2', 'tag3'],
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avgRating: 3
};

interface RegWidthCarouselProps {
  title?: string;
  withSearchSelect?: boolean
}

const SearchSelect: React.FC = () => {
  return(
    <Grid spacing={1} container>
      <Grid item xs={6}>
        <Select />
      </Grid>
      <Grid item xs={6}>
        <SearchBar />
      </Grid>
    </Grid>
  );
};

const RegWidthCarousel: React.FC<RegWidthCarouselProps> = ({ title, withSearchSelect }) => {
    return (
      <>
        <Typography variant='h4'>{title}</Typography>
        <div>
          {withSearchSelect && <SearchSelect />}
        </div>
        <StyledCarousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          draggable
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          slidesToSlide={1}
          swipeable
          centerMode={true}
          removeArrowOnDeviceType={['xmd', 'sm', 'xs']}
          responsive={{
            xl: {
              breakpoint: {
                max: 3000,
                min: 1200
              },
              items: 2.4,
              partialVisibilityGutter: 40
            },
            lg: {
              breakpoint: {
                max: 1200,
                min: 960
              },
              items: 1.5,
              partialVisibilityGutter: 20
            },
            md: {
              breakpoint: {
                max: 960,
                min: 768
              },
              items: 2,
              partialVisibilityGutter: 0
            },
            xmd: {
              breakpoint: {
                max: 768,
                min: 480
              },
              items: 1.5,
              partialVisibilityGutter: 20
            },
            sm: {
              breakpoint: {
                max: 480,
                min: 0
              },
              items: 0.8,
              partialVisibilityGutter: 50
            }
          }}
        >
          <MediaCard cardData={{ ...mockCardData, id: 'mock1' }} />
          <MediaCard cardData={{ ...mockCardData, id: 'mock2' }} />
          <MediaCard cardData={{ ...mockCardData, id: 'mock3' }} />
          <MediaCard cardData={{ ...mockCardData, id: 'mock4' }} />
          <MediaCard cardData={{ ...mockCardData, id: 'mock5' }} />
          <MediaCard cardData={{ ...mockCardData, id: 'mock6' }} />
          <MediaCard cardData={{ ...mockCardData, id: 'mock7' }} />
          <MediaCard cardData={{ ...mockCardData, id: 'mock8' }} />
        </StyledCarousel>
      </>
    );
};

export default RegWidthCarousel;
