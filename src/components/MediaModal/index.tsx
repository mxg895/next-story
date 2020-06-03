import React, { useEffect } from 'react';
import { Modal, useMediaQuery, Typography, Paper } from '@material-ui/core';
import styled from 'styled-components';
import MockCover from '../../assets/MockCover.png';
import { CardData } from '../MediaCard';

interface MediaModalProps {
    isOpen: boolean,
    modalData?: CardData //TODO-MK make this required
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

const MediaImage = styled.img`
    max-width: 50%;
`;

const TopLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

const MediaTags = styled.div`
    overflow: auto;
`;

const MediaBlurb = styled.div`
    margin: 10px;
    margin-bottom: 35px;
`;

const ModalFooter = styled(Paper)`
    height: 35px;
    width: 100%;
    position:absolute;
    bottom:0;
    display: flex;
    justify-content: flex-end;
`;

const GoToPageButton = styled.button`
    margin-right: 10px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.palette.grey[600]};
    cursor: pointer;
    font-size: 16px;

    &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
    }
`;

const modalData = {
    title: 'Mock Title Harry Potter Mock Title Harry Potter',
    image: MockCover,
    tags: ['fantasy', 'action', 'sci-fi', 'superheroes', 'tag1', 'tag2', 'tag3'],
    blurb: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rating: 3
}

const MediaModal: React.FC<MediaModalProps> = (props: MediaModalProps) => {
    const [open, setOpen] = React.useState(false);
    const { isOpen } = props;

    const isSmall = useMediaQuery('(max-width:450px)'); // TODO-MK figure out if we want this special or override Mui breakpoints
    const isShort = useMediaQuery('(max-height:500px)');

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            setOpen(isOpen);
        }
    }, [isOpen]);

    return (
        <Modal open={open} onClose={handleClose}>
            <CenteredBody isSmall={isSmall} isShort={isShort}>
                <ModalHeader>
                    Add close x icon here
                </ModalHeader>
                <ModalContent isSmall={isSmall} isShort={isShort}>
                    <TopContainer isShort={isShort}>
                        <MediaImage src={modalData.image} />
                        <TopLeftContainer>
                            <Typography variant='h3' gutterBottom>{modalData.title}</Typography>
                            <Typography variant='caption' gutterBottom>Avg Rating: {modalData.rating.toString()}</Typography>
                            <MediaTags><Typography>{modalData.tags.join(', ')}</Typography></MediaTags>
                        </TopLeftContainer>
                    </TopContainer>
                    <MediaBlurb><Typography variant='body1'>{modalData.blurb}</Typography></MediaBlurb>
                </ModalContent>
                <ModalFooter elevation={3}>
                    <GoToPageButton>Go to page</GoToPageButton>
                    {/* TODO-MK add a right arrow icon here */}
                </ModalFooter>
            </CenteredBody>
        </Modal>
    );
}

export default MediaModal;