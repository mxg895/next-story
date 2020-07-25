import React, {useDebugValue, useEffect, useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MediaCard from '../MediaCard';
import styled from 'styled-components';
import MockCover from '../../assets/MockCover.png';
import { CardData, MediaType } from '../../constants/dataTypes';
import axios from 'axios';

const StyledCarousel = styled(Carousel)`
    margin-top: 20px;
`;

// const mockCardData: CardData = {
//     title: 'Mock Title Harry Potter Mock Title Harry Potter',
//     id: 'movie-001',
//     mediaType: MediaType.movie,
//     image: MockCover,
//     people: 'J.K. Rowling',
//     genres: ['fantasy', 'action', 'sci-fi', 'superheroes', 'tag1', 'tag2', 'tag3'],
//     nextStoryTags: ['cliffhangers', 'sad ending'],
//     blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     avgRating: 3
// };

const host = window.location.protocol + '//'+ window.location.host;

function kickOff() {
    return new Promise(function (resolve, reject) {
        setTimeout(async function () {
            resolve();
        }, 1000);
    }).then(async function () {
       return  await axios.get(host + `/thirdPartyMovieApi/tmdbMovies/popularMovies`)
           .then((response: any) => {
               return  response.data;
           })
           .catch((error: any) => {
               console.log(error);
           });
       // ?
    });
}

const MultiCardCarousel: React.FC = () => {
    //TODO
    const [mediaData, setMediaData] = useState([{    title: '',
        id: '',
        mediaType: MediaType.start,
        image: MockCover,
        people: '',
        genres: [],
        nextStoryTags: [],
        blurb: '',
        avgRating: 0}]);
    useEffect(() => {
        axios.get(host + `/thirdPartyMovieApi/tmdbMovies/popularMovies`)
            .then((response: any) => {
                const data = response.data;
                setMediaData(data);
            })
            .catch((error: any) => {
                console.log(error);
            });
    });
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
        >{mediaData.map((m, index) => {
            return (<MediaCard key={index} cardData={mediaData[index]} />);
        })}
        </StyledCarousel>
    );
};

export default MultiCardCarousel;
