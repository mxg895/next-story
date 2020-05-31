import React from 'react';
import styled from "styled-components";
import { Card, Paper } from "@material-ui/core";

const CardContainer = styled(Card)`
    height: 200px;
    width: 300px;
    display: flex;
    flex-direction: row;
`;

const LeftSide = styled.div`
    height: 100%;
    width: 40%;
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MediaImage = styled.img`
    max-height: 200px;
    max-width: 100%;
    cursor: pointer;
    &:hover {
        opacity: 50%;
    }
`;

const RightSide = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 18px;
    margin: 0;
    font-weight: normal;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-left: 5px;
    min-height: 50px;
`;

const Blurb = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;  
    overflow-y: auto;
    padding-left: 5px;
`;

const Tags = styled(Paper)`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
    overflow: hidden; 
    text-overflow: ellipsis;
    font-size: 12px;
    padding-left: 5px;
    min-height: 35px;
`;

type CardData = {
    title: string,
    image?: string, // the url, etc to the image
    tags?: string[],
    blurb: string,
    rating?: number
}

interface MediaCardProps {
    cardData: CardData
}

const MediaCard: React.FC<MediaCardProps> = ({ cardData }: MediaCardProps) => {
    const { title, image, tags, blurb, rating } = cardData;

    return (
        <CardContainer elevation={1}>
            <LeftSide>
                <MediaImage src={image} onClick={() => { console.log('image click ')}} />
            </LeftSide>
            <RightSide>
                <Paper square={true} elevation={2}><Title>{title}</Title></Paper>
                <Blurb>{blurb}</Blurb>
                <Tags square={true} elevation={3}>{tags && tags.join(', ')}</Tags>
            </RightSide>
        </CardContainer>
    );
};

export default MediaCard;
