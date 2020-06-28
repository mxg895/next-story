import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import '../../App.css';
import Login from '../../components/Login';
import MovieSearchBox from '../../components/MovieSearchBox';

export const baseUrl = 'https://api.themoviedb.org';

const Forms: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <Login></Login>
            <MovieSearchBox movieSearchValue={''}/>
        </Container>
    );
};

export default Forms;
