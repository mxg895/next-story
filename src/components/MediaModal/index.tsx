import React, { useEffect } from 'react';
import { Modal, useMediaQuery, Typography, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { CardData } from '../MediaCard';
import { connect } from 'react-redux';
import { setMediaModalClosedAction } from '../../actions/mediaModalActions';

interface MediaModalProps {
    isOpen: boolean,
    modalData: CardData
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

const Button = styled.button`
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

function closeMediaModal(props: any) {
    props.setMediaModalClosedAction();
}

const MediaModal: React.FC<MediaModalProps> = (props: MediaModalProps) => {
    const [open, setOpen] = React.useState(false);
    const { isOpen, modalData } = props;

    const isSmall = useMediaQuery('(max-width:450px)'); // TODO-MK figure out if we want this special or override Mui breakpoints
    const isShort = useMediaQuery('(max-height:500px)');

    useEffect(() => {
        if (isOpen) {
            setOpen(isOpen);
        } else {
            setOpen(false);
        }
    }, [isOpen]);

    return (
        <Modal open={open} onClose={() => closeMediaModal(props)}>
            <CenteredBody isSmall={isSmall} isShort={isShort}>
                <ModalHeader>
                    <Button onClick={() => closeMediaModal(props)}>Close</Button>
                </ModalHeader>
                <ModalContent isSmall={isSmall} isShort={isShort}>
                    <TopContainer isShort={isShort}>
                        <MediaImage src={modalData?.image} isShort={isShort} />
                        <TopLeftContainer>
                            <Typography variant='h3' gutterBottom>{modalData?.title}</Typography>
                            <Typography variant='caption' gutterBottom>Avg Rating: {modalData?.rating?.toString()}</Typography>
                            <MediaTags>
                                <Typography>{modalData?.tags?.join(', ')}</Typography>
                            </MediaTags>
                        </TopLeftContainer>
                    </TopContainer>
                    <MediaBlurb isSmall={isSmall} isShort={isShort}>
                        <Typography variant='body1'>{modalData?.blurb}</Typography>
                    </MediaBlurb>
                </ModalContent>
                <ModalFooter elevation={3}>
                    <Button>Go to page</Button>
                    {/* TODO-MK add a right arrow icon here */}
                </ModalFooter>
            </CenteredBody>
        </Modal>
    );
};

export default connect(null, { setMediaModalClosedAction })(MediaModal);
