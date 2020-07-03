export enum MediaType {
    movie = 'movie',
    book = 'book'
}

export type CardData = {
    title: string,
    id: string,
    mediaType: MediaType,
    image: string, // the url, etc to the image
    tags: string[],
    nextStoryTags: string[],
    people: string,
    blurb: string,
    avgRating: number
}