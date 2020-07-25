import { CombinedMoviesBooksInfo, UPDATE_FAVORITES, UPDATE_LATER_LIST } from '../constants/BooksMoviesActionTypes';

export const updateFavorites = (booksMovies: CombinedMoviesBooksInfo ) => {
  return {
    type: UPDATE_FAVORITES,
    data: booksMovies
  };
};

export const updateLaterList = (booksMovies: CombinedMoviesBooksInfo) => {
  return {
    type: UPDATE_LATER_LIST,
    data: booksMovies
  };
};
