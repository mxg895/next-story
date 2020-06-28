import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import axios from 'axios';

import {TmdbApi} from 'tmdb-typescript-api';

export const baseUrl = 'https://api.themoviedb.org';

interface IMovieState {
    movieSearchValue:string;
}

let api: TmdbApi = new TmdbApi('597ad6ea2c97c1f27b49df9b11a6abe1');

function searchMovies(text:string) {

    api.search.movies(text).subscribe((movies) => {
        let movie = movies.results[0];
        if(movie !== undefined){
            console.log(`Pulp Fiction was released in ${movie.release_date}`);
            console.log(`movie name is ${movie.title}`);
            getMovies(movie.id);
            getGenres();
            getMoviesCredits('2038');
        }
        //todo
        //credits and people and role
    });
}

function getGenres(){
    axios
        .get(`${baseUrl}/3/genre/movie/list`, {
            params: { api_key: '597ad6ea2c97c1f27b49df9b11a6abe1' }
        })
        .then((response) => {
            var genres = response.data.genres;
            console.log(genres);
        })
        .catch((error) => console.log(error));
}

function getMoviesCredits(id: string){
    axios
        .get(`${baseUrl}/3/movie/${id}/credits`, {
            params: { api_key: '597ad6ea2c97c1f27b49df9b11a6abe1' }
        })
        .then((response) => {

            console.log(response.data.cast);
            console.log(response.data.crew);
        })
        .catch((error) => console.log(error));
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

const MovieSearchBox: React.FC<IMovieState>= (state: IMovieState) => {
    const { movieSearchValue} = state;
    return (
        <div>
            <label htmlFor='searchType'>Safe</label>
            <input className='form-control' id='searchType' onChange={ (e) => searchMovies(e.target.value)} >
            </input>
        </div>
    );
};

export default MovieSearchBox;
