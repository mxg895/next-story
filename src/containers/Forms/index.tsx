import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import '../../App.css';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';

import {
    Input,
    Row,
    Col
} from 'antd';
import {TmdbApi} from 'tmdb-typescript-api';


const { Search } = Input;
let api: TmdbApi = new TmdbApi('597ad6ea2c97c1f27b49df9b11a6abe1');

class SearchBox extends React.Component<{ searchHandler: any }> {
    render() {
        return (
            <Row>
                <Col span={12} offset={6}>
                    <Search
                        placeholder='enter movie, series, episode name'
                        enterButton='Search'
                        size='large'
                        onSearch={(value:string) => searchMovies(value)}
                    />
                </Col>
            </Row>
        );
    }
}

function searchMovies(text: string) {

    api.search.movies(text).subscribe((movies) => {
        let movie = movies.results[0];
        if(movie !== undefined){
            console.log(`Pulp Fiction was released in ${movie.release_date}`);
            console.log(`movie name is ${movie.title}`);
            getMovies(movie.id);
        }
        //todo
        //credits and people and role
    });
}

function getMovies(movieId: number) {

    api.movies.details(movieId).subscribe((movieDetails) => {
        if(movieDetails !== undefined){
            let genres = movieDetails.genres;
            for (let genre of genres){
                console.log(`Genre name is ${genre.name}`);
            }
            console.log(`movie overview is ${movieDetails.overview}`);
            console.log(`movie release date is ${movieDetails.release_date}`);
            console.log(`movie spoken language is/are `);
            let spokenLanguages = movieDetails.spoken_languages;
            for (let lang of spokenLanguages){
                console.log(`${lang.name}-${lang.iso_639_1}, `);
            }
        }

    });
}

const Forms: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <Login></Login>
            <SignUp></SignUp>
            <SearchBox searchHandler='bat' />
        </Container>
    );
};

export default Forms;
