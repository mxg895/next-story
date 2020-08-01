import React, {useEffect, useState}  from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Typography, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import SearchResultsInfiniteScroll from '../../components/SearchResultsInfiniteScroll';

const TypeSelector = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TagFilter: React.FC = () => {
    const [allTags, setTags] = useState<Array<any>>([]);
    const [isMovieSelected, selectMovie] = useState<Boolean>(false);
    const [isBookSelected, selectBook] = useState<Boolean>(false);
    const [allSelectedTags, selectTags] = useState<Array<any>>([]);
    const increaseIndexBy = 5;
    const [queryStartIndex, setQueryStartIndex] = useState(0);
    const [hasMoreMovieResults, setHasMoreMovieResults] = useState<boolean>(true);
    const [hasMoreBookResults, setHasMoreBookResults] = useState<boolean>(true);
    const [allResults, setAllResults] = useState<Array<any>>([]);
    const [queryStatus, setQueryStatus] = useState<Boolean>(false);

    useEffect(() => {
        axios.get('/nextStoryTags')
            .then((res: any) => {
                setTags(res.data);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }, []);

    const getResultsByTag = async () => {
        let movieList: Array<any> = [];
        let bookList: Array<any> = [];
        const query: String = allSelectedTags.reduce((acc, curr)=> {
            return `${acc}&${curr.tagId}`;
        }, '').substring(1);

        if (isMovieSelected) {
            try {
                const movieRes = await axios.get(`/movies/withTags/${query}`);
                movieList = movieRes.data;
            } catch (e) {
                console.log('error fetching movies from mongo for tag', e);
            }
        }

        if (isBookSelected) {
            try {
                const bookRes = await axios.get(`/books/withTags/${query}`);
                bookList = bookRes.data;
            } catch (e) {
                console.log('error fetching books from mongo for tag', e);
            }
        }
        try {
            await getFromThirdParty(movieList, bookList);
        } catch (e) {
            console.log(e);
        }
    };

    async function getFromThirdParty(mongoMovies: any[], mongoBooks: any[]) {
        const bookData: any[] = [];
        const movieData: any[] = [];
        const maxEndIndex = queryStartIndex + increaseIndexBy;
        const movieEndIndex = mongoMovies.length >= maxEndIndex ? maxEndIndex : mongoMovies.length;
        const bookEndIndex = mongoBooks.length >= maxEndIndex ? maxEndIndex : mongoBooks.length;
        for(let i = queryStartIndex; i < movieEndIndex; i++){
            const movieId = mongoMovies[i].movieId;
            try {
                const movieRes = await axios.get(`/thirdPartyMovieApi/tmdbMovies/searchOneById/${movieId}`);
                let movieWithNextStoryTags = movieRes.data;
                const thisMongoMovieMaybe = mongoMovies.filter((m) => m.movieId === movieId);
                const thisMongoMovie = thisMongoMovieMaybe.length > 0 && thisMongoMovieMaybe[0];
                if (thisMongoMovie) {
                    movieWithNextStoryTags.nextStoryTags = thisMongoMovie.nextStoryTags;
                } else {
                    movieWithNextStoryTags.nextStoryTags = [];
                }
                movieData.push(movieWithNextStoryTags);
                setAllResults((allResults) => [...allResults, movieWithNextStoryTags]);
            } catch (e) {
                console.log(e);
            }
        }
        for(let i = queryStartIndex; i < bookEndIndex; i++){
            const bookId = mongoBooks[i].bookId;
            try {
                const bookRes = await axios.get(`/thirdPartyBookApi/googleBooks/searchOneById/${bookId}`);
                let bookWithNextStoryTags = bookRes.data;
                const thisMongoBookMaybe = mongoBooks.filter((b) => b.bookId === bookId);
                const thisMongoBook = thisMongoBookMaybe.length > 0 && thisMongoBookMaybe[0];
                if (thisMongoBook) {
                    bookWithNextStoryTags.nextStoryTags = thisMongoBook.nextStoryTags;
                } else {
                    bookWithNextStoryTags.nextStoryTags = [];
                }
                bookData.push(bookWithNextStoryTags);
                setAllResults((allResults) => [...allResults, bookWithNextStoryTags]);
            } catch (e) {
                console.log(e);
            }
        }
        if (movieData.length === 0) {
            setHasMoreMovieResults(false);
        }
        if (bookData.length === 0) {
            setHasMoreBookResults(false);
        }
        return [movieData, bookData];
    }

    const doNext = () => {
        setQueryStartIndex(queryStartIndex + increaseIndexBy);
    };

    const showFilterResult = () => {
        if (queryStatus) {
            if (allResults && allResults.length > 0) {
                return (
                    <SearchResultsInfiniteScroll
                        resultsToDisplay={allResults}
                        hasMore={hasMoreMovieResults || hasMoreBookResults}
                        doNext={doNext}
                    />
                );
            } else {
                return (
                    <p style={{textAlign: 'center'}}>
                        <b>Sorry... We Haven't Found What You Are Looking For.</b>
                    </p>
                );
            }
        }
        return (
            <p style={{textAlign: 'center'}}>
                <b>What's Your Next Story?</b>
            </p>
        );
    };

    const tabFilter = (
        <div>
            <TypeSelector>
                <Typography>
                    Types:
                </Typography>
                <div>
                    <FormControlLabel
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={
                        <Checkbox
                            name='movie'
                            onClick={(event) => {
                                event.stopPropagation();
                                selectMovie(!isMovieSelected);
                            }}
                        />}
                        label='Movies'
                    />
                    <FormControlLabel
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={
                        <Checkbox
                            name='book'
                            onClick={(event) => {
                                event.stopPropagation();
                                selectBook(!isBookSelected);
                            }}
                        />}
                        label='Books'
                    />
                </div>
            </TypeSelector>
            <div>
                <Typography>
                    Tags:
                </Typography>
                <div>
                    {
                        allTags.map(
                            (tag, index) => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name={tag.tagName}
                                            onClick={() => {
                                                if (allSelectedTags.includes(tag)) {
                                                    const index = allSelectedTags.indexOf(tag);
                                                    if (index > -1) {
                                                        allSelectedTags.splice(index, 1);
                                                    }
                                                } else {
                                                    selectTags([...allSelectedTags, tag]);
                                                }
                                            }}
                                        />
                                    }
                                    label={tag.tagName}
                                    key={index}
                                />
                            )
                        )
                    }
                </div>
            </div>
            <Button
                variant='contained'
                style={{ marginBottom: '5px' }}
                onClick={()=>{
                    if (!(isMovieSelected || isBookSelected)) {
                        alert('Please Specify The Story Type You Are Looking For!');
                    } else if (!allSelectedTags || allSelectedTags.length === 0) {
                        alert('Please Specify The Tags For Your Story!');
                    } else {
                        setAllResults([]);
                        setQueryStatus(true);
                        getResultsByTag();
                    }
                }}
            >
                Explore
            </Button>
        </div>
    );

    return (
        <div>
            {
                tabFilter
            }
            {
               showFilterResult()
            }
        </div>
    );
};

export default TagFilter;
