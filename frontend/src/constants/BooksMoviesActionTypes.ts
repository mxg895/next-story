interface MediaInfo {
  _id: string;
  nextStoryTags: Array<{ tagId: string, tagName: string}>;
  avgRating: number;
};

export interface BookInfo extends MediaInfo {
  bookId: string;
}

export interface MovieInfo extends MediaInfo {
  movieId: string;
}

export interface CombinedMoviesBooksInfo {
  books: Array<BookInfo>,
  movies: Array<MovieInfo>
}

export interface BooksMoviesState {
  favorites: CombinedMoviesBooksInfo;
  later: CombinedMoviesBooksInfo;
}

export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';
export const UPDATE_LATER_LIST = 'UPDATE_LATER_LIST';

interface UpdateFavoritesAction {
  type: typeof UPDATE_FAVORITES;
  data: CombinedMoviesBooksInfo;
}

interface UpdateLaterAction {
  type: typeof UPDATE_LATER_LIST;
  data: CombinedMoviesBooksInfo;
}

export type BooksMoviesActionTypes = UpdateFavoritesAction | UpdateLaterAction;
