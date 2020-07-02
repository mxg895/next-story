import React, {useState} from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Box} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

interface StarRaterProps {
    avgRating?: number;
    userRating?: number;
}

const StarRater: React.FC<StarRaterProps> = (props: StarRaterProps) => {
    const { avgRating, userRating } = props;
    const [ratedStar, setStar] = useState<number | null | string>(avgRating?.toFixed(2) || 'none');
    const [, setHover] = useState(userRating);

    function clickStar(newValue: number | null) {
        setStar(newValue);
        // TODO use the api to set the rating (add the media type and media id as props)
    }

    return (
        <>
            <Rating
                name='rating-name'
                defaultValue={userRating || avgRating}
                precision={avgRating ? 0.25 : 1}
                emptyIcon={<StarBorderIcon fontSize='inherit' />}
                readOnly={!!avgRating}
                onChange={(event, newValue) => {
                    clickStar(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                size={avgRating ? 'small' : 'medium'}
            />
            {avgRating && <Box ml={2}><Typography variant='subtitle2' >{ratedStar}</Typography></Box>}
        </>
    );
};

export default StarRater;
