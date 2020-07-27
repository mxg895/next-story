import React, {useEffect, useState} from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {SingleQueryType} from '../../constants/dataTypes';

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
    console.log(queryType);
    console.log(query);

    const [bookQueryStartIndex, setBookQueryStartIndex] = useState(0);
    const [movieQueryStartIndex, setMovieQueryStartIndex] = useState(0);

    const [movieIdsMatchingTag, setMovieIdsMatchingTag] = useState<Array<string>>([]);
    const [bookIdsMatchingTag, setBookIdsMatchingTag] = useState<Array<string>>([]);
    const [movieResults, setMovieResults] = useState<Array<any>>([]);
    const [bookResults, setBookResults] = useState<Array<any>>([]);

    // movies
    useEffect(() => {
        switch (queryType) {
            case SingleQueryType.tag:
                console.log('search tag first');
                break;
            case SingleQueryType.genre:
                console.log('search third party genre');
                break;
            case SingleQueryType.person:
                console.log('search third party person');
                break;
            default:
                break;
        }
    }, [queryType, query, movieQueryStartIndex]);

    // books
    useEffect(() => {
        switch (queryType) {
            case SingleQueryType.tag:
                console.log('search tag first');
                break;
            case SingleQueryType.genre:
            case SingleQueryType.person:
                console.log('search third party person or genre (fall through)');
                // TODO uncomment this after implementing the movies, commented out to not waste google queries
                // axios.get(`/thirdPartyBookApi/googleBooks/singleQuery/${queryType}/${query}/${bookQueryStartIndex}`)
                //     .then((res: any) => {
                //         const books = res.data;
                //         console.log(books);
                //         setBookResults(books);
                //     })
                //     .catch((error: any) => {
                //         console.log('Error getting media', error);
                //     });
                break;
            default:
                break;
        }
    }, [queryType, query, bookQueryStartIndex]);

    return (
        <Container maxWidth='md'>
            <Typography variant='h1'>Single Search Result</Typography>
        </Container>
    );
};

export default SingleSearchResultPage;
