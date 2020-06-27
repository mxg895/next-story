import React from 'react';
import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { connect } from 'react-redux';
import { setMediaModalOpenAction } from '../../actions/mediaModalActions';
import { CardData } from '../../constants/dataTypes';

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

function openMediaModal(props: any) {
    const data = props.cardData;
    props.setMediaModalOpenAction(data);
}

const MediaCard: React.FC<MediaCardProps> = (props: MediaCardProps) => {
    const { image } = props.cardData;

    return (
        <CardContainer elevation={1}>
            <MediaImage src={image} onClick={() => openMediaModal(props)} />
        </CardContainer>
    );
};

export default connect(null, { setMediaModalOpenAction })(MediaCard);
