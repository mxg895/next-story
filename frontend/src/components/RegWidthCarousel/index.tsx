import Typography from '@material-ui/core/Typography';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MediaCard from '../MediaCard';
import styled from 'styled-components';
import SearchBar from '../SearchBar';
import Grid from '@material-ui/core/Grid';
import Select from '../Select';
import { CardData, MediaType } from '../../constants/dataTypes';
import { connect } from 'react-redux';
import { CombinedMoviesBooksInfo } from '../../constants/BooksMoviesActionTypes';
import axios from 'axios';

const StyledCarousel = styled(Carousel)`
  margin-top: 20px;
`;

interface RegWidthCarouselProps {
  bookIds?: string[];
  bMSource: 'favorite' | 'read' | 'later';
  movieIds?: string[];
  title?: string;
  withSearchSelect?: boolean;
  updateMethod: (booksMovies: CombinedMoviesBooksInfo) => void;
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

// NOTE: console logs are commented out but kept in code to aid future development & debugging
const RegWidthCarousel: React.FC<RegWidthCarouselProps> = ({ bookIds, movieIds, title, withSearchSelect, updateMethod, bMSource }) => {
    const sessionDataString = sessionStorage.getItem('NS-session-data');
    const sessionDataObj = sessionDataString && JSON.parse(sessionDataString);
    const userId = sessionDataObj.userId;
    const [mediaData, setMediaData] = useState([{    title: '',
        id: '',
        mediaType: MediaType.start,
        image: '',
        people: '',
        genres: [],
        nextStoryTags: [],
        blurb: '',
        avgRating: 0}]);

    useEffect(() => {
        axios.get(`/users/userLists/${userId}`)
            .then((response: any) => {
                const data = response.data;
                let finalData: any[] = [];
                if(bMSource.includes('favorite')){
                    finalData.push.apply(finalData, data.favoriteMoviesDetails);
                    finalData.push.apply(finalData, data.favoriteBooksDetails);
                }
                else if (bMSource.includes('read')) {
                    finalData.push.apply(finalData, data.watchLaterDetails);
                    finalData.push.apply(finalData, data.readLaterDetails);
                } else if (bMSource.includes('later')){
                    finalData.push.apply(finalData, data.booksReadDetails);
                    finalData.push.apply(finalData, data.moviesWatchedDetails);
                }
                setMediaData(finalData);
            })
            .catch((error: any) => {
              // console.log(error);
            });
    }, []);

  const mediaCards = mediaData.map((cardData:CardData, index) => {
    return <MediaCard key={index} cardData={cardData} />;
  });

  const cards = [...mediaCards];

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
        {cards}
      </StyledCarousel>
    </>
  );
};

export default connect()(RegWidthCarousel);
