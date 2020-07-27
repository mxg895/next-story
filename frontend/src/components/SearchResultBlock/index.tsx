import React from 'react';
import styled from 'styled-components';
import {Grid, Typography, useMediaQuery} from '@material-ui/core';
import {MediaType, SingleQueryType} from '../../constants/dataTypes';
import TagsSection from '../TagsSection';
import {useHistory} from 'react-router';

interface SearchResultBlockProps {
    image: string;
    title: string;
    blurb: string;
    genres: Array<string>;
    mediaType: MediaType;
    mediaId: string;
}

const Block = styled.div`
    border-top: ${({ theme }) => `2px solid ${theme.palette.grey[400]}`};
    border-bottom: ${({ theme }) => `2px solid ${theme.palette.grey[400]}`};
    min-height: 50px;
    padding: 5px;
    margin-bottom: 2px;
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledImage = styled.img<{isSmall: boolean}>`
    max-width: ${(props) => props.isSmall ? '150px' : '100%'};
    &:hover {
        cursor: pointer;
    }
`;

const SearchResultBlock: React.FC<SearchResultBlockProps> = (props: SearchResultBlockProps) => {
    const { image, title, blurb, genres, mediaType, mediaId } = props;
    const history = useHistory();
    const isSmall = useMediaQuery('(max-width:450px)');

    const goToPage = () => {
        history.push(`/${mediaType}/${mediaId}`);
    };

    return (
        <Block>
            <TopBar>
                <Grid container direction={'row'}  spacing={5}>
                    <Grid item sm={3}>
                        <StyledImage src={image} onClick={goToPage} isSmall={isSmall}/>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant={'h5'}>
                            <strong>
                                {title}
                            </strong>
                        </Typography>
                        {blurb}
                    </Grid>
                    <Grid item sm={3}>
                        <TagsSection tags={genres} singleQueryType={SingleQueryType.genre}/>
                    </Grid>
                </Grid>
            </TopBar>
        </Block>
    );
};

export default SearchResultBlock;
