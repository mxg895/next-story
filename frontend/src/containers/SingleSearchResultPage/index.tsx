import React, {useEffect, useMemo, useState} from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {SingleQueryType} from '../../constants/dataTypes';
import SearchResultBlock from '../../components/SearchResultBlock';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchResultsInfiniteScroll from '../../components/SearchResultsInfiniteScroll';

const getQueryTypeAndQuery = (locationSearch: string) => {
    const trimmedUri = locationSearch.substr(1);
    const [singleQueryTypeUri, queryUri] = trimmedUri.split('&');
    const queryType = singleQueryTypeUri.split('=')[1];
    const query = queryUri.split('=')[1];
    return [queryType, query];
};

const SingleSearchResultPage: React.FC = (props: any) => {
    const searchUri = decodeURI(props.location.search);
    const [queryType, query] = getQueryTypeAndQuery(searchUri);
    const increaseIndexBy = 5;

    const [bookQueryStartIndex, setBookQueryStartIndex] = useState(0);
    const [movieQueryStartIndex, setMovieQueryStartIndex] = useState(0);

    const [movieIdsMatchingTag, setMovieIdsMatchingTag] = useState<Array<string>>([]);
    const [bookIdsMatchingTag, setBookIdsMatchingTag] = useState<Array<string>>([]);
    const [movieResults, setMovieResults] = useState<Array<any>>([]);
    const [bookResults, setBookResults] = useState<Array<any>>([]);

    const [allResults, setAllResults] = useState<Array<any>>([]);
    const [filterState, setFilterState] = useState<'all' | 'books' | 'movies'>('all');

    const [hasMoreMovieResults, setHasMoreMovieResults] = useState<boolean>(true);
    const [hasMoreBookResults, setHasMoreBookResults] = useState<boolean>(true);

    useEffect(() => {
        switch (queryType) {
            case SingleQueryType.tag:
                console.log('search tag first');
                break;
            case SingleQueryType.searchBar:
            case SingleQueryType.genre:
            case SingleQueryType.person:
                console.log('search third party person');
                axios.get(`/thirdPartyMovieApi/tmdbMovies/singleQuery/${queryType}/${query}/${bookQueryStartIndex}/${increaseIndexBy}`)
                    .then((res: any) => {
                        const movies = res.data;
                        console.log(movies);
                        if (movies.length === 0) {
                            setHasMoreMovieResults(false);
                        } else {
                            setMovieResults(movies);
                        }
                        axios.get(`/thirdPartyBookApi/googleBooks/singleQuery/${queryType}/${query}/${bookQueryStartIndex}/${increaseIndexBy}`)
                            .then((res: any) => {
                                const books = res.data;
                                console.log(books);
                                if (books.length === 0) {
                                    setHasMoreBookResults(false);
                                } else {
                                    setBookResults(books);
                                    setAllResults([...allResults, ...movies, ...books]);
                                }
                            })
                            .catch((error: any) => {
                                console.log('Error getting third party books', error);
                            });
                    })
                    .catch((error: any) => {
                        console.log('Error getting third party movies', error);
                    });
                break;
            default:
                break;
        }
    }, [queryType, query, movieQueryStartIndex]);

    const resultsToDisplay = useMemo(() => {
        switch(filterState) {
            case 'movies':
                return movieResults;
            case 'books':
                return bookResults;
            case 'all':
            default:
                return allResults;
        }
    }, [filterState, movieResults, bookResults, allResults]);

    const doNext = () => {
        switch(filterState) {
            case 'movies':
                setMovieQueryStartIndex(movieQueryStartIndex + increaseIndexBy);
                break;
            case 'books':
                setBookQueryStartIndex(bookQueryStartIndex + increaseIndexBy);
                break;
            case 'all':
                setBookQueryStartIndex(bookQueryStartIndex + increaseIndexBy);
                setMovieQueryStartIndex(movieQueryStartIndex + increaseIndexBy);
                break;
            default:
                return allResults;
        }
    };

    return (
        <Container maxWidth='md'>
            <Typography variant='h1'>Search Results</Typography>
            <br/>
            <SearchResultsInfiniteScroll
                resultsToDisplay={resultsToDisplay}
                hasMore={hasMoreMovieResults || hasMoreBookResults}
                doNext={doNext}
            />
        </Container>
    );
};

export default SingleSearchResultPage;
