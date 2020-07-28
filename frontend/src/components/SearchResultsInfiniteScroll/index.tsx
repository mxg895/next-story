import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchResultBlock from '../SearchResultBlock';


interface SearchResultsInfiniteScrollProps {
    resultsToDisplay: Array<any>;
    hasMore: boolean;
    doNext: any;
}

const SearchResultsInfiniteScroll = (props: SearchResultsInfiniteScrollProps) => {
    const { resultsToDisplay, hasMore, doNext } = props;

    return (
        <InfiniteScroll
            style={{overflow: 'hidden'}}
            dataLength={resultsToDisplay.length}
            scrollThreshold={1}
            next={doNext}
            hasMore={hasMore}
            loader={<h4 style={{textAlign: 'center'}}>Loading more results...</h4>}
            endMessage={
                <p style={{textAlign: 'center'}}>
                    <b>No more reviews</b>
                </p>
            }>
            {resultsToDisplay.map((result, index) =>
                <SearchResultBlock
                    key={index}
                    image={result.image}
                    title={result.title}
                    blurb={result.blurb}
                    genres={result.genres}
                    mediaType={result.mediaType}
                    mediaId={result.id}
                />)
            }
        </InfiniteScroll>
    );
};

export default SearchResultsInfiniteScroll;
