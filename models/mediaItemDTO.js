class MediaItemDTO {
    id;
    title;
    mediaType;
    image;
    genres;
    blurb;
    publishedDate;
    avgRating;

    constructor(id, title, mediaType,image, genres, blurb, publishedDate,  avgRating){
        this.id = id;
        this.title = title;
        this.mediaType = mediaType;
        this.image = image;
        this.genres = genres;
        this.blurb = blurb;
        this.publishedDate = publishedDate;
        this.avgRating = avgRating;
    }
}

module.exports = {
    MediaItemDTO
};
