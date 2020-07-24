import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MediaCard from '../MediaCard';
import styled from 'styled-components';
import MockMovieCover from '../../assets/MockCover.png';
import MockBookCover from '../../assets/MockBookCover.jpg';
import { CardData, MediaType } from '../../constants/dataTypes';
import {connect} from 'react-redux';
import {
    ALL,
    MOVIES,
    BOOKS,
} from '../../constants/homePageFilterConstants';


const StyledCarousel = styled(Carousel)`
    margin-top: 20px;
`;

const mockMovieCardData: CardData = {
    title: 'Mock Title Harry Potter Mock Title Harry Potter',
    id: 'movie-001',
    mediaType: MediaType.movie,
    image: MockMovieCover,
    people: 'J.K. Rowling',
    genres: ['fantasy', 'action', 'sci-fi', 'superheroes', 'tag1', 'tag2', 'tag3'],
    nextStoryTags: ['cliffhangers', 'sad ending'],
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avgRating: 3
};

const mockBookCardData: CardData = {
    title: 'Mock Title Game of Thrones Mock Title Game of Thrones',
    id: 'book-001',
    mediaType: MediaType.book,
    image: MockBookCover,
    people: 'George R.R. Martin',
    genres: ['fantasy', 'action','superheroes', 'tag1', 'tag2', 'tag3'],
    nextStoryTags: ['cliffhangers', 'sad ending'],
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avgRating: 4
};

const MultiCardCarousel: React.FC = (props: any) => { //should take popular/recommendation data as parameter
    const mockBookList = [mockBookCardData, mockBookCardData, mockBookCardData];
    const mockMovieList = [mockMovieCardData, mockMovieCardData, mockMovieCardData];
    const renderCards = (bookList: Array<CardData>, movieList: Array<CardData>, filter: any) => {
        switch (filter) {
            case ALL:
                return [...bookList, ...movieList].map(cardData => <MediaCard cardData={cardData} />);
            case MOVIES: 
                return movieList.map(cardData => <MediaCard cardData={cardData} />);
            case BOOKS: 
                return bookList.map(cardData => <MediaCard cardData={cardData} />);
            default:
                return [...bookList, ...movieList].map(cardData => <MediaCard cardData={cardData} />);
        }
    }
    return (
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
            removeArrowOnDeviceType={['xxs', 'xs', 'sm']}
            responsive={{
                xl: {
                    breakpoint: {
                        max: 3000,
                        min: 1920
                    },
                    items: 6,
                    partialVisibilityGutter: 40
                },
                lg: {
                    breakpoint: {
                        max: 1920,
                        min: 1280
                    },
                    items: 5,
                    partialVisibilityGutter: 30
                },
                md: {
                    breakpoint: {
                        max: 1280,
                        min: 1100
                    },
                    items: 4,
                    partialVisibilityGutter: 0
                },
                xmd: {
                    breakpoint: {
                        max: 1100,
                        min: 900
                    },
                    items: 3,
                    partialVisibilityGutter: 0
                },
                sm: {
                    breakpoint: {
                        max: 900,
                        min: 600
                    },
                    items: 2,
                    partialVisibilityGutter: 0
                },
                xs: {
                    breakpoint: {
                        max: 600,
                        min: 400
                    },
                    items: 1,
                    partialVisibilityGutter: 0
                },
                xxs: {
                    breakpoint: {
                        max: 400,
                        min: 0
                    },
                    items: 0.5,
                    partialVisibilityGutter: 100
                }
            }}
        >
            {
                renderCards(mockBookList, mockMovieList, props.homePageFilterReducer)
            }
            {/* <MediaCard cardData={mockMovieCardData} />
            <MediaCard cardData={mockMovieCardData} />
            <MediaCard cardData={mockMovieCardData} />
            <MediaCard cardData={mockMovieCardData} />
            <MediaCard cardData={mockMovieCardData} />
            <MediaCard cardData={mockMovieCardData} />
            <MediaCard cardData={mockMovieCardData} />
            <MediaCard cardData={mockMovieCardData} /> */}
        </StyledCarousel>
    );
};

const mapStateToProps = (state: any) => {
    return {
        homePageFilterReducer: state.homePageFilterReducer,
    };
};

export default connect(mapStateToProps)(MultiCardCarousel);
