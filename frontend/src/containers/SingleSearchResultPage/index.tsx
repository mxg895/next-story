import React, {useEffect, useMemo, useState} from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {SingleQueryType} from '../../constants/dataTypes';
import SearchResultsInfiniteScroll from '../../components/SearchResultsInfiniteScroll';
import HomePageDesktopFilter from '../../components/DesktopFilter';
import HomePageMobileFilter from '../../components/MobileFilter';
import {connect} from 'react-redux';
import {
    ALL,
    MOVIES,
    BOOKS
} from '../../constants/homePageFilterConstants';
import {changeSingleSearchPageFilter} from '../../actions/singleSearchPageFilterActions';

const getQueryTypeAndQuery = (locationSearch: string) => {
    const trimmedUri = locationSearch.substr(1);
    const [singleQueryTypeUri, queryUri] = trimmedUri.split('&');
    const queryType = singleQueryTypeUri.split('=')[1];
    const query = queryUri.split('=')[1];
    return [queryType, query];
};

const SingleSearchResultPage: React.FC = (props: any) => {
    const searchUri = decodeURI(props.location.search);
    const {singleSearchPageFilter} = props;
    const [queryType, query] = getQueryTypeAndQuery(searchUri);
    const increaseIndexBy = 5;

    const [queryStartIndex, setQueryStartIndex] = useState(0);

    const [movieResults, setMovieResults] = useState<Array<any>>([]);
    const [bookResults, setBookResults] = useState<Array<any>>([]);

    const [allResults, setAllResults] = useState<Array<any>>([]);
    const [filterState, setFilterState] = useState<'all' | 'books' | 'movies'>(singleSearchPageFilter);

    const [hasMoreMovieResults, setHasMoreMovieResults] = useState<boolean>(true);
    const [hasMoreBookResults, setHasMoreBookResults] = useState<boolean>(true);

    useEffect(() => {
        setFilterState(singleSearchPageFilter);
    }, [singleSearchPageFilter]);

    useEffect(() => {
        switch (queryType) {
            case SingleQueryType.moviePerson:
                props.changeSingleSearchPageFilter(MOVIES);
                break;
            case SingleQueryType.bookPerson:
                props.changeSingleSearchPageFilter(BOOKS);
                break;
            case SingleQueryType.tag:
            case SingleQueryType.searchBar:
            case SingleQueryType.genre:
            default:
                props.changeSingleSearchPageFilter(ALL);
                break;
        }
    }, [queryType]);

    async function getMediaForTag() {
        let mongoMovies = [];
        let mongoBooks = [];
        try {
            const mongoMovieRes = await axios.get(`/movies/withTag/${query}`);
            mongoMovies = mongoMovieRes.data;
        } catch (e) {
            console.log('error fetching movies from mongo for tag', e);
        }
        try {
            const mongoBookRes = await axios.get(`/books/withTag/${query}`);
            mongoBooks = mongoBookRes.data;
        } catch (e) {
            console.log('error fetching movies from mongo for tag', e);
        }
        return [mongoMovies, mongoBooks];
    }

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
                setMovieResults((movieResults) => [...movieResults, movieWithNextStoryTags]);
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
                setBookResults((bookResults) => [...bookResults, bookWithNextStoryTags]);
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

    async function getFromThirdPartyForTagsAndPeople() {
        let movies: any[] = [];
        let books: any[] = [];
        try {
            const movieRes = await axios.get(`/thirdPartyMovieApi/tmdbMovies/singleQuery/${queryType}/${query}/${queryStartIndex}/${increaseIndexBy}`);
            movies = movieRes.data;
            if (movies.length === 0) {
                setHasMoreMovieResults(false);
            } else {
                setMovieResults((movieResults) => [...movieResults, ...movies]);
                setAllResults((allResults) => [...allResults, ...movies]);
            }
        } catch (e) {
            console.log(e);
        }
        try {
            const bookRes = await axios.get(`/thirdPartyBookApi/googleBooks/singleQuery/${queryType}/${query}/${queryStartIndex}/${increaseIndexBy}`);
            books = bookRes.data;
            if (books.length === 0) {
                setHasMoreBookResults(false);
            } else {
                setBookResults((bookResults) => [...bookResults, ...books]);
                setAllResults((allResults) => [...allResults, ...books]);
            }
        } catch (e) {
            console.log(e);
        }
        return [movies, books];
    }

    useEffect(() => {
        switch (queryType) {
            case SingleQueryType.tag:
                getMediaForTag().then((res) => {
                    const [mongoMovies, mongoBooks] = res;
                    console.log('mongo movies and books:', res);
                    getFromThirdParty(mongoMovies, mongoBooks).then((res) => {
                        const [movieData, bookData] = res;
                        console.log([movieData, bookData]);
                    }).catch((e) => console.log(e));
                }).catch((e) => console.log(e));
                break;
            case SingleQueryType.searchBar:
            case SingleQueryType.genre:
            case SingleQueryType.moviePerson:
            case SingleQueryType.bookPerson:
                getFromThirdPartyForTagsAndPeople().then((res) => {
                    const [movies, books] = res;
                    console.log([movies, books]);
                }).catch((e) => console.log(e));
                break;
            default:
                break;
        }
    }, [queryType, query, queryStartIndex]);

    const resultsToDisplay = useMemo(() => {
        switch(filterState) {
            case MOVIES:
                return movieResults;
            case BOOKS:
                return bookResults;
            case ALL:
            default:
                return allResults;
        }
    }, [filterState, movieResults, bookResults, allResults]);

    const doNext = () => {
        setQueryStartIndex(queryStartIndex + increaseIndexBy);
    };

    const hasMore = useMemo(() => {
        switch(filterState) {
            case MOVIES:
                return hasMoreMovieResults;
            case BOOKS:
                return hasMoreBookResults;
            case ALL:
            default:
                return hasMoreMovieResults || hasMoreBookResults;
        }
    }, [filterState, hasMoreBookResults, hasMoreMovieResults]);

    return (
        <Container maxWidth='md'>
            <Typography variant='h1'>Search Results</Typography>
            <br/>
            <HomePageDesktopFilter isSearchPage={true} />
            <br/>
            <SearchResultsInfiniteScroll
                resultsToDisplay={resultsToDisplay}
                hasMore={hasMore}
                doNext={doNext}
            />
            <br/>
            <HomePageMobileFilter isSearchPage={true} />
        </Container>
    );
};

const mapStateToProps = (state: any) => {
    return {
        singleSearchPageFilter: state.singleSearchPageFilterReducer
    };
};

export default connect(mapStateToProps, { changeSingleSearchPageFilter })(SingleSearchResultPage);
