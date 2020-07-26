import React, {useEffect, useRef, useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MediaCard from '../MediaCard';
import styled from 'styled-components';
import MockMovieCover from '../../assets/MockCover.png';
import MockBookCover from '../../assets/MockBookCover.jpg';
import { CardData, MediaType } from '../../constants/dataTypes';
import axios from 'axios';
import {connect} from 'react-redux';
import {
    ALL,
    MOVIES,
    BOOKS
} from '../../constants/homePageFilterConstants';
const StyledCarousel = styled(Carousel)`
    margin-top: 20px;
`;

const RecomendationMultiCardCarousel: React.FC = (props: any) => { //should take popular/recommendation data as parameter
    const [movieData, setMovieData] = useState([{    title: '',
        id: '',
        mediaType: MediaType.start,
        image: MockMovieCover,
        people: '',
        genres: [],
        nextStoryTags: [],
        blurb: '',
        avgRating: 0}]);
    const [bookData, setBookData] = useState([{    title: '',
        id: '',
        mediaType: MediaType.start,
        image: MockBookCover,
        people: '',
        genres: [],
        nextStoryTags: [],
        blurb: '',
        avgRating: 0}]);
    let mountedRef = useRef(true);
    useEffect(() => {
        axios.get(`/thirdPartyMovieApi/tmdbMovies/movieRecommendations`)
            .then((response: any) => {
                const data = response.data;
                if (!mountedRef.current) return null;
                setMovieData(data);
            })
            .catch((error: any) => {
                console.log(error);
            });
        axios.get(`/thirdPartyBookApi/googleBooks/bookRecommendations`)
            .then((response: any) => {
                const data = response.data;
                if (!mountedRef.current) return null;
                setBookData(data);
            })
            .catch((error: any) => {
                console.log(error);
            });
        if(bookData.length > 1 && movieData.length>1){
            return () => {
                mountedRef.current = false;
            };
        }
    });
    const renderCards = (filter: any) => {
        switch (filter) {
            case ALL:
                return [...bookData, ...movieData].map((cardData:CardData,index)  => {
                    return (<MediaCard key={index} cardData={cardData} />);});
            case MOVIES:
                return movieData.map((cardData:CardData, index) => {
                    return (<MediaCard key={index} cardData={cardData} />);});
            case BOOKS:
                return bookData.map((cardData:CardData, index) => {
                    return (<MediaCard key={index} cardData={cardData} />);});
            default:
                return [...bookData, ...movieData].map((cardData:CardData,index) => {
                    return (<MediaCard key={index} cardData={cardData} />);});
        }
    };
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
            }}>
            {
                renderCards(props.homePageFilterReducer)
            }

        </StyledCarousel>
    );
};

const mapStateToProps = (state: any) => {
    return {
        homePageFilterReducer: state.homePageFilterReducer
    };
};

export default connect(mapStateToProps)(RecomendationMultiCardCarousel);
