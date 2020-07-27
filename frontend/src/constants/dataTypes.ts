export enum MediaType {
    movie = 'movie',
    book = 'book',
    start = ''
}

export enum SingleQueryType {
    person = 'person',
    genre = 'genre',
    tag = 'tag',
    searchBar = 'searchBar'
}

export type CardData = {
    title: string,
    id: string,
    mediaType: MediaType,
    image: string, // the url, etc to the image
    genres: string[],
    nextStoryTags: string[],
    people: string,
    blurb: string,
    avgRating: number
}

export interface Tag{
  tagId: string;
  tagName: string;
}
