import React, {useEffect, useState} from 'react';
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    useMediaQuery,
    Typography,
    IconButton
} from '@material-ui/core';
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

const StyledDialogTitle = styled(DialogTitle)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &.MuiDialogTitle-root {
        margin-bottom: 10px;
        height: 25px;
    }
`;

const StyledImage = styled.img`
    width: 100%;
`;

const StyledDialogActions = styled(DialogActions)`
    &.MuiDialogActions-root {
        box-shadow: 10px 10px 5px grey;
    }
`;

// NOTE: console logs are commented out but kept in code to aid future development & debugging
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
                    // console.log('Error getting media', error);
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
                    // console.log('Error getting media', error);
                });
        }
    }, [modalData, isOpen]);

    function goToPage() {
        const { id, mediaType } = modalData;
        history.push(`/${mediaType}/${id}`);
        setModalOpen(false);
    }

    return (
        <Dialog
            scroll={'paper'}
            open={isOpen}
            onClose={() => setModalOpen(false)}
            fullScreen={isSmall || isShort}
        >
            <StyledDialogTitle disableTypography>
                <IconButton onClick={() => setModalOpen(false)}>
                    <StyledCloseIcon />
                </IconButton>
            </StyledDialogTitle>
            <DialogContent>
                <Grid container direction={'column'} spacing={2}>
                    <Grid container direction={'row'} spacing={2}>
                        <Grid item sm={4} style={{ width: '100%' }}>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
                                <StyledImage src={modalData?.image}/>
                            </Box>
                        </Grid>
                        <Grid item sm={8}>
                            <Typography variant='h3' gutterBottom>
                                {modalData?.title} {modalData?.mediaType === MediaType.movie ? '(Movie)' : '(Book)'}
                            </Typography>
                            <Typography variant='subtitle2' >
                                Avg members rating: {!averageRating && 'No rating'}
                            </Typography>
                            {averageRating > 0 && <StarRater readOnlyRating={averageRating} readonly />}
                            Genres:
                            <TagsSection
                                tags={modalData?.genres || []}
                                singleQueryType={SingleQueryType.genre}
                            />
                            {storyTags.length > 0 &&
                                <>
                                    Tags:
                                    <TagsSection
                                        tagObjects={storyTags || []}
                                        singleQueryType={SingleQueryType.tag}
                                    />
                                </>
                            }
                        </Grid>
                    </Grid>
                    <Grid item sm={12}>
                        <Interweave content={modalData?.blurb || ''} />
                    </Grid>
                </Grid>
            </DialogContent>
            <Box boxShadow={3}>
                <StyledDialogActions>
                        <StyledButton
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => goToPage()}
                        >
                            Go to page
                        </StyledButton>
                </StyledDialogActions>
            </Box>
        </Dialog>
    );
};

export default MediaModal;
