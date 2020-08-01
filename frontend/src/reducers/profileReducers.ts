import { ProfileState, ProfileActionTypes, SET_PROFILE } from '../constants/profileActionTypes';

const initialProfileState: ProfileState = {
  avatar: '',
  booksRead: [],
  email: '',
  favoriteAuthors: [],
  favoriteBooks: [],
  favoriteDirectors: [],
  favoriteGenres: [],
  favoriteMovies: [],
  favoriteMoviesDetails: [],
  favoriteBooksDetails: [],
  booksReadDetails: [],
  moviesWatchedDetails: [],
  readLaterDetails: [],
  watchLaterDetails: [],
  favoriteNextStoryTags: [],
  message: '',
  moviesWatched: [],
  name: '',
  readLater: [],
  type: '',
  userId: '',
  watchLater: [],
  _id: ''
};

const profileReducer = (state = initialProfileState, action: ProfileActionTypes): ProfileState => {
  switch (action.type) {
    case SET_PROFILE:
      return { ...action.profile };
    default:
      return state;
  }
};

export default profileReducer;
