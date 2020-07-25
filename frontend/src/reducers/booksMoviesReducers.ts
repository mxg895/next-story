import { BooksMoviesActionTypes, UPDATE_FAVORITES, UPDATE_LATER_LIST, BooksMoviesState } from '../constants/BooksMoviesActionTypes';

const initState: BooksMoviesState = {
  favorites: {
    books: [],
    movies: []
  },
  later: {
    books:[],
    movies: []
  }
};

const booksMoviesReducers = (state = initState, action: BooksMoviesActionTypes) => {
  switch (action.type) {
    case UPDATE_FAVORITES:
      return { ...state, favorites: action.data};
    case UPDATE_LATER_LIST:
      return { ...state, later: action.data };
    default:
      return state;
  }
};

export default booksMoviesReducers;
