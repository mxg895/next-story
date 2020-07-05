import React, {useEffect, useState} from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Box, IconButton} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {changeRatingAction} from '../../actions/ratingReviewActions';

interface StarRaterProps {
    readonly: boolean

    // required if readonly === true
    readOnlyRating?: number;
    hideReadOnlyLabel?: boolean;

    // required if readonly === false
    userRating?: number;
    userId?: string;
    userName?: string;
}

const StyledIconButton = styled(IconButton)`
    padding: 0px !important;
`;

const VerticallyCenteredDiv = styled.div`
    display: flex;
    align-items: center;
`;

const getIcon = (index: number, rating: number) => {
    const twoDecimalString = rating.toFixed(2);
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

const changeRating = (props: any, userId: string, userName: string, rating: number | undefined) => {
    props.changeRatingAction({ userId, userName, rating });
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
    }, [userRating, ratedStar]);

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
                        {readonly && readOnlyRating ?
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
