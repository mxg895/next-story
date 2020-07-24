import { ProfileState, ProfileActionTypes, SET_PROFILE } from '../constants/profileActionTypes';

const initialProfileState: ProfileState = {
  avatar: '',
  booksRead: [],
  email: '',
  encrypted: '',
  favoriteAuthors: '',
  favoriteBooks: [],
  favoriteDirectors: [],
  favoriteGenres: [],
  favoriteMovies: [],
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
      console.log('setprofile called: ', action.profile);
      return { ...action.profile };
    default:
      return state;
  }
};

export default profileReducer;
