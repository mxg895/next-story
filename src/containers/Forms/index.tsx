import React, {useState} from 'react';
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
    let api: TmdbApi = new TmdbApi('597ad6ea2c97c1f27b49df9b11a6abe1');
    api.search.movies(text).subscribe((movies) => {
        let movie = movies.results[0];
        if(movie != undefined){
            console.log(`Pulp Fiction was released in ${movie.release_date}`);
            console.log(`movie name is ${movie.title}`);
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
