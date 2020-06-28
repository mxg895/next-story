import React, {useState} from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Box, IconButton} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import styled from 'styled-components';

interface StarRaterProps {
    isClickable: boolean;
    avgRating?: number;
}

const StyledIconButton = styled(IconButton)`
    padding: 0px !important;
`;

const VerticallyCenteredDiv = styled.div`
    display: flex;
    align-items: center;
`;

const StarRater: React.FC<StarRaterProps> = (props: StarRaterProps) => {
    const [ratedStar, setStar] = useState(0);
    const { isClickable, avgRating } = props;
    let twoDecimalRating: number = 0; // TODO set up tooltip functionality
    let closestWholeNumber: number;
    if (avgRating) {
        const twoDecimalRatingString = avgRating.toFixed(2);
        twoDecimalRating = Number(twoDecimalRatingString);
        closestWholeNumber = Math.round(avgRating);
    }

    function clickStar(starIndex: number) {
        ratedStar === starIndex ? setStar(starIndex - 1) : setStar(starIndex);
        // TODO use the api to set the rating (add the media type and media id as props)
    }

    return (
        <Box display='flex'>
            {[...Array(5)].map((star, index) => {
                return (
                    <VerticallyCenteredDiv key={index}>
                        {isClickable ?
                            <StyledIconButton size={'small'} onClick={() => clickStar(index + 1)}>
                                {index < ratedStar ?
                                    <StarIcon color={'primary'} />
                                    :
                                    <StarBorderIcon color={'primary'} />
                                }
                            </StyledIconButton>
                            :
                            <>
                                {index <  closestWholeNumber ?
                                    <StarIcon color={'primary'} fontSize={'small'}/>
                                    :
                                    <StarBorderIcon color={'primary'} fontSize={'small'}/>
                                }
                            </>
                        }
                    </VerticallyCenteredDiv>
                );
            })}
        </Box>
    );
};

export default StarRater;
