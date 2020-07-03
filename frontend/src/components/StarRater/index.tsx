import React, {useState} from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Box} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

interface StarRaterProps {
    readonly: boolean

    // if readonly === true
    readOnlyRating?: number;
    hideReadOnlyLabel?: boolean;

    // if readonly === false
    userRating?: number;
}

const StarRater: React.FC<StarRaterProps> = (props: StarRaterProps) => {
    const { readonly, readOnlyRating, userRating, hideReadOnlyLabel } = props;
    const [ratedStar, setStar] = useState<number | null | string>(readOnlyRating?.toFixed(2) || 'no rating');
    const [, setHover] = useState(userRating);

    function clickStar(newValue: number | null) {
        setStar(newValue);
        // TODO use the api to set the rating (add the media type and media id as props)
    }

    return (
        <>
            <Rating
                name='rating-name'
                defaultValue={userRating || readOnlyRating}
                precision={readonly ? 0.25 : 1}
                emptyIcon={<StarBorderIcon fontSize='inherit' />}
                readOnly={readonly}
                onChange={(event, newValue) => {
                    clickStar(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                size={readonly ? 'small' : 'medium'}
            />
            {readonly && !hideReadOnlyLabel && <Box ml={2}><Typography variant='subtitle2' >{ratedStar}</Typography></Box>}
        </>
    );
};

export default StarRater;
