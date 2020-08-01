import Typography from '@material-ui/core/Typography';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MediaCard from '../MediaCard';
import styled from 'styled-components';
import MockCover from '../../assets/MockCover.png';
import SearchBar from '../SearchBar';
import Grid from '@material-ui/core/Grid';
import Select from '../Select';
import { CardData, MediaType } from '../../constants/dataTypes';
import { connect } from 'react-redux';
import Axios from 'axios';
import qs from 'qs';
import { CombinedMoviesBooksInfo } from '../../constants/BooksMoviesActionTypes';
import axios from 'axios';
import MockBookCover from '../../assets/MockBookCover.jpg';

const StyledCarousel = styled(Carousel)`
  margin-top: 20px;
`;

const mockCardData: Omit<CardData, 'id'> = {
    title: 'Mock Title Harry Potter Mock Title Harry Potter',
    image: MockCover,
    mediaType: MediaType.movie,
    nextStoryTags: [],
    people: 'J.K. Rowling',
    genres: ['fantasy', 'action', 'sci-fi', 'superheroes', 'tag1', 'tag2', 'tag3'],
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avgRating: 3
};

interface RegWidthCarouselProps {
  bookIds?: string[];
  bMSource: 'favorite' | 'later';
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

const RegWidthCarousel: React.FC<RegWidthCarouselProps> = ({ bookIds, movieIds, title, withSearchSelect, updateMethod }) => {
    const sessionDataString = sessionStorage.getItem('NS-session-data');
    const sessionDataObj = sessionDataString && JSON.parse(sessionDataString);
    const userId = sessionDataObj.userId;
    const [mediaData, setMediaData] = useState([{    title: '',
        id: '',
        mediaType: MediaType.start,
        image: MockBookCover,
        people: '',
        genres: [],
        nextStoryTags: [],
        blurb: '',
        avgRating: 0}]);
    // const [mediaData, setMediaData] = useState({ books: [], movies: [] } as CombinedMoviesBooksInfo);
    useEffect(() => {
        axios.get(`/users/userLists/${userId}`)
            .then((response: any) => {
                const data = response.data;
                console.log(title);
                console.log(data);
                let finalData: any[] = [];
                console.log(title);
                if(title?.includes('Favourite')){
                    finalData.push.apply(finalData, data.favoriteMoviesDetails);
                    finalData.push.apply(finalData, data.favoriteBooksDetails);
                }
                else{
                    finalData.push.apply(finalData, data.watchLaterDetails);
                    finalData.push.apply(finalData, data.readLaterDetails);
                    finalData.push.apply(finalData, data.booksReadDetails);
                    finalData.push.apply(finalData, data.moviesWatchedDetails);
                }


                setMediaData(finalData);
                // setMediaData(data.favoriteMoviesDetails);
                //setMediaData(data.favoriteBooksDetails);
               //  setMediaData(data.watchLaterDetails);
               //  setMediaData(data.readLaterDetails);
               //  setMediaData(data.booksReadDetails);
               //  setMediaData(data.moviesWatchedDetails);
               // setMediaData(data.watchLaterDetails);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }, []);
  // const host = window.location.protocol + '//'+ window.location.host;
  // const fetchBooksAndMovies = () => {
  //   Axios.get(`${host}/multi/booksAndMovies`, {
  //     params: { books: bookIds, movies: movieIds },
  //     paramsSerializer: (params) => {
  //       return qs.stringify(params);
  //     }
  //   })
  //     .then((response)=> {
  //       const data: CombinedMoviesBooksInfo = response.data;
  //       updateMethod(data);
  //       setMediaData(data);
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching books and movie information for media cards: ', err);
  //   });
  // };
  //
  // const fetchCallback = useCallback(fetchBooksAndMovies, [bookIds, movieIds]);

  const mediaCards = mediaData.map((cardData:CardData, index) => {
    return <MediaCard key={index} cardData={cardData} />;
  });

  // const movieCards = mediaData.movies.map(({ movieId, avgRating, nextStoryTags }) => {
  //   const transformedNSTags = nextStoryTags.map((tag) => {
  //     return tag.tagName;
  //   });
  //   return <MediaCard key={movieId} cardData={{ ...mockCardData, avgRating, id: movieId, mediaType: MediaType.movie, nextStoryTags: transformedNSTags }} />;
  // });

  const cards = [...mediaCards];

  // useEffect(() => {
  //   if(!!bookIds?.length || !!movieIds?.length) {
  //     fetchCallback();
  //   }
  // }, [bookIds, movieIds, fetchCallback]);

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
