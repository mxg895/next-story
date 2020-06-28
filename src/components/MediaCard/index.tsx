import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { CardData } from '../../constants/dataTypes';
import MediaModal from '../MediaModal';

const CardContainer = styled(Card)`
    height: 250px;
    width: 175px;
    display: flex;
    justify-content: center;
    align-items: space-between;
    flex-direction: column;
`;

const MediaImage = styled.img`
    max-height: 250px;
    max-width: 100%;
    cursor: pointer;
    &:hover {
        opacity: 50%;
    }
`;

interface MediaCardProps {
    cardData: CardData
}

const MediaCard: React.FC<MediaCardProps> = (props: MediaCardProps) => {
    const { image } = props.cardData;
    const [isMediaModalOpen, setMediaModalOpen] = useState(false);

    return (
        <>
            <MediaModal isOpen={isMediaModalOpen} setModalOpen={() => setMediaModalOpen(false)} modalData={props.cardData} />
            <CardContainer elevation={1}>
                <MediaImage src={image} onClick={() => setMediaModalOpen(true)} />
            </CardContainer>
        </>
    );
};

export default MediaCard;
