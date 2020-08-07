import React, {useEffect, useState} from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Box, IconButton} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {changeRatingAction} from '../../actions/reviewRatingActions';
import axios from 'axios';
import {MediaType} from '../../constants/dataTypes';

interface StarRaterProps {
    readonly: boolean

    // required if readonly === true
    readOnlyRating?: number;
    hideReadOnlyLabel?: boolean;

    // required if readonly === false
    userRating?: number;
    userId?: string;
    userName?: string;
    userHasReviewText?: boolean;
    mediaId?: string;
    mediaType?: MediaType;
}

const StyledIconButton = styled(IconButton)`
    padding: 0px !important;
`;

const VerticallyCenteredDiv = styled.div`
    display: flex;
    align-items: center;
`;

const host = window.location.protocol + '//'+ window.location.host;

const getIcon = (index: number, rating: number | undefined) => {
    const twoDecimalString = rating?.toFixed(2) || '0.00';
    const [wholeNumberString, decimalString] = twoDecimalString.split('.');
    const wholeNumber = parseInt(wholeNumberString);
    const decimalTimes100 = parseInt(decimalString);
    if ((index + 1) <= wholeNumber) {
        return <StarIcon style={{fill: '#FFCC00'}} fontSize={'small'}/>;
    } else if (index === wholeNumber) {
        const closestFifty = Math.round(decimalTimes100 / 50)*50;
        if (closestFifty === 0) {
            return <StarBorderIcon style={{fill: '#FFCC00'}} fontSize={'small'}/>;
        } else if (closestFifty === 50) {
            return <StarHalfIcon style={{fill: '#FFCC00'}} fontSize={'small'}/>;
        } else if (closestFifty === 100) {
            return <StarIcon style={{fill: '#FFCC00'}} fontSize={'small'}/>;
        }
    } else {
        return <StarBorderIcon style={{fill: '#FFCC00'}} fontSize={'small'}/>;
    }
};

// NOTE: console logs are commented out but kept in code to aid future development & debugging
const changeRating = (props: any, userId: string, userName: string, rating: number | undefined) => {
    props.changeRatingAction({ userId, userName, rating });
    if (!rating && !props.userHasReviewText) {
        axios.delete(host + `/reviewRatings`
            + `/${props.mediaType}/${props.mediaId}/${userId}`)
            .then((res: any) => {
                // console.log('Successfully deleted the reviewRating', res);
            })
            .catch((err: any) => {
                // console.log(err);
            });
    } else {
        axios.put(host + '/reviewRatings/rating',
            {
                mediaId: props.mediaId,
                mediaType: props.mediaType,
                userId: userId,
                rating: rating
            })
            .then((res: any) => {
                // console.log('Successfully put the rating: ', res);
            })
            .catch((err: any) => {
                // console.log(err);
            });
    }
};

const StarRater: React.FC<StarRaterProps> = (props: StarRaterProps) => {
    const [ratedStar, setStar] = useState(0);
    const { readonly, readOnlyRating, hideReadOnlyLabel, userRating, userId, userName } = props;
    let twoDecimalRatingString = ''; // TODO set up tooltip functionality
    if (readonly && readOnlyRating) {
        twoDecimalRatingString = readOnlyRating.toFixed(2);
    } else if (userRating) {
        twoDecimalRatingString = userRating.toFixed(2);
    }

    useEffect(() => {
        if (!ratedStar) {
            setStar(userRating || 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userRating]);

    function clickStar(starIndex: number) {
        const ratingToSet = ratedStar === starIndex ? starIndex - 1 : starIndex;
        setStar(ratingToSet);
        userId && userName && changeRating(props, userId, userName, ratingToSet);
        // TODO use the api to set the rating (add the media type and media id as props)
    }

    return (
        <Box display='flex'>
            {[...Array(5)].map((star, index) => {
                return (
                    <VerticallyCenteredDiv key={index}>
                        {readonly ?
                            <>
                                {
                                    getIcon(index, readOnlyRating)
                                }
                            </>
                            :
                            <StyledIconButton size={'small'} onClick={() => clickStar(index + 1)}>
                                {index < ratedStar ?
                                    <StarIcon style={{fill: '#FFCC00'}} />
                                    :
                                    <StarBorderIcon style={{fill: '#FFCC00'}} />
                                }
                            </StyledIconButton>
                        }
                    </VerticallyCenteredDiv>
                );
            })}
            <Box ml={1}>{readonly && !hideReadOnlyLabel && twoDecimalRatingString}</Box>
        </Box>
    );
};

export default connect(null, { changeRatingAction })(StarRater);
