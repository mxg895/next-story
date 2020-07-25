import React from 'react';
import { Modal, useMediaQuery, Typography, Paper, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CardData } from '../../constants/dataTypes';

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
    max-width: ${(props) => props.isShort ? '30%' : '50%'}
`;

const TopLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
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

    const isSmall = useMediaQuery('(max-width:450px)'); // TODO-MK figure out if we want this special or override Mui breakpoints
    const isShort = useMediaQuery('(max-height:500px)');

    function goToPage() {
        //TODO
        //create movie if not exist in mongo
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
                        <TopLeftContainer>
                            <Typography variant='h3' gutterBottom>{modalData?.title}</Typography>
                            <Typography variant='caption' gutterBottom>Movie Rating: {modalData?.avgRating?.toString()}</Typography>
                            <MediaTags>
                                <Typography>{modalData?.genres?.join(', ')}</Typography>
                            </MediaTags>
                        </TopLeftContainer>
                    </TopContainer>
                    <MediaBlurb isSmall={isSmall} isShort={isShort}>
                        <Typography variant='body1'>{modalData?.blurb}</Typography>
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
