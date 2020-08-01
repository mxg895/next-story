import React, {useEffect, useState} from 'react';
import {Modal, useMediaQuery, Typography, Paper, IconButton} from '@material-ui/core';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {CardData, MediaType, SingleQueryType} from '../../constants/dataTypes';
import Interweave from 'interweave';
import TagsSection from '../TagsSection';
import axios from 'axios';
import StarRater from '../StarRater';

interface MediaModalProps {
    isOpen: boolean,
    modalData: CardData,
    setModalOpen: (open: boolean) => void
}

const CenteredBody = styled.div<{ isSmall: boolean, isShort: boolean }>`
    width: ${(props) => props.isSmall || props.isShort ? '100vw' : '500px'};
    height: ${(props) => props.isSmall || props.isShort ? '100vh' : '500px'};
    position: absolute;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
    background-color: white;
    position: relative;
`;

const ModalHeader = styled.div`
    background-color: ${({ theme }) => theme.palette.primary.main};
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const ModalContent = styled.div<{ isSmall: boolean, isShort: boolean }>`
    height: ${(props) => props.isSmall || props.isShort ? '100%' : '450px'};
    overflow: auto;
`;

const TopContainer = styled.div<{ isShort: boolean }>`
    max-height: ${(props) => props.isShort ? '80%' : '350px'};
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 10px;
    overflow: auto;
`;

const MediaImage = styled.img<{ isShort: boolean }>`
    max-width: ${(props) => props.isShort ? '30%' : '50%'};
`;

const TopLeftContainer = styled.div<{ isShort: boolean }>`
    max-height: ${(props) => props.isShort ? '80%' : '350px'};
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    margin-left: 10px;
`;

const MediaTags = styled.div`
    overflow: auto;
`;

const MediaBlurb = styled.div<{ isSmall: boolean, isShort: boolean }>`
    margin: 10px;
    margin-bottom: ${(props) => props.isSmall || props.isShort ? '100px' : '35px'};
`;

const ModalFooter = styled(Paper)`
    height: 35px;
    width: 100%;
    position:absolute;
    bottom:0;
    display: flex;
    justify-content: flex-end;
`;

const StyledButton = styled(Button)`
    margin-right: 10px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.palette.grey[600]};
    cursor: pointer;
    font-size: 16px;

    &:hover {
        color: ${({ theme }) => theme.palette.grey[900]};
    }
`;

const StyledCloseIcon = styled(CloseIcon)`
    color: white;
    &:hover {
        color: grey;
    }
`;

const MediaModal: React.FC<MediaModalProps> = (props: MediaModalProps) => {
    const { isOpen, modalData, setModalOpen } = props;
    const history = useHistory();

    const [storyTags, setStoryTags] = useState([]);
    const [averageRating, setAverageRating] = useState(0);

    const isSmall = useMediaQuery('(max-width:450px)');
    const isShort = useMediaQuery('(max-height:500px)');

    useEffect(() => {
        if (isOpen) {
            const { id, mediaType } = modalData;
            const mediaRouteType = mediaType === MediaType.book ? 'books' : 'movies';
            axios.get(`/${mediaRouteType}/tags/${id}`)
                .then((mediaRes: any) => {
                    const mediaData = mediaRes.data;
                    setStoryTags(mediaData.nextStoryTags);
                })
                .catch((error: any) => {
                    console.log('Error getting media', error);
                });
        }
    }, [modalData, isOpen]);

    useEffect(() => {
        if (isOpen) {
            const { id, mediaType } = modalData;
            axios.get(`/reviewRatings/averageRating/${mediaType}/${id}`)
                .then((mediaRes: any) => {
                    const averageRatingData = mediaRes.data;
                    setAverageRating(averageRatingData.average);
                })
                .catch((error: any) => {
                    console.log('Error getting media', error);
                });
        }
    }, [modalData, isOpen]);

    function goToPage() {
        const { id, mediaType } = modalData;
        history.push(`/${mediaType}/${id}`);
        setModalOpen(false);
    }

    return (
        <Modal open={isOpen} onClose={() => setModalOpen(false)}>
            <CenteredBody isSmall={isSmall} isShort={isShort}>
                <ModalHeader>
                    <IconButton onClick={() => setModalOpen(false)}>
                        <StyledCloseIcon />
                    </IconButton>
                </ModalHeader>
                <ModalContent isSmall={isSmall} isShort={isShort}>
                    <TopContainer isShort={isShort}>
                        <MediaImage src={modalData?.image} isShort={isShort} />
                        <TopLeftContainer  isShort={isShort}>
                            <Typography variant='h3' gutterBottom>{modalData?.title} {modalData?.mediaType === MediaType.movie ? '(Movie)' : '(Book)'}</Typography>
                            <Typography variant='subtitle2' >Avg members rating: {!averageRating && 'No rating'}</Typography>
                            {averageRating > 0 && <StarRater readOnlyRating={averageRating} readonly />}
                            <MediaTags>
                                Genres:
                                <TagsSection
                                    tags={modalData?.genres || []}
                                    singleQueryType={SingleQueryType.genre}
                                />
                                {storyTags.length > 0 && <>
                                    Tags:
                                    <TagsSection
                                        tagObjects={storyTags || []}
                                        singleQueryType={SingleQueryType.tag}
                                    />
                                </>}
                            </MediaTags>
                        </TopLeftContainer>
                    </TopContainer>
                    <MediaBlurb isSmall={isSmall} isShort={isShort}>
                        <Interweave content={modalData?.blurb || ''} />
                    </MediaBlurb>
                </ModalContent>
                <ModalFooter elevation={3}>
                    <StyledButton
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => goToPage()}
                    >
                        Go to page
                    </StyledButton>
                </ModalFooter>
            </CenteredBody>
        </Modal>
    );
};

export default MediaModal;
