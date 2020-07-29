import React from 'react';
import styled from 'styled-components';
import {Grid, Link, useMediaQuery} from '@material-ui/core';
import {MediaType, SingleQueryType} from '../../constants/dataTypes';
import TagsSection from '../TagsSection';
import {useHistory} from 'react-router';
import Interweave from 'interweave';

interface SearchResultBlockProps {
    image: string;
    title: string;
    blurb: string;
    genres: Array<string>;
    mediaType: MediaType;
    mediaId: string;
    nextStoryTags?: Array<any>; // optional
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

const StyledTitle = styled.div`
    margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
    &:hover {
        cursor: pointer;
    }
`;

const SearchResultBlock: React.FC<SearchResultBlockProps> = (props: SearchResultBlockProps) => {
    const { image, title, blurb, genres, mediaType, mediaId, nextStoryTags } = props;
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
                        <StyledTitle>
                            <StyledLink variant={'h5'} onClick={goToPage} color={'textPrimary'} gutterBottom>
                                <strong>
                                    {title}
                                </strong>
                            </StyledLink>
                        </StyledTitle>
                        <Interweave content={blurb} />
                    </Grid>
                    <Grid item sm={3}>
                        Genres:
                        <TagsSection tags={genres} singleQueryType={SingleQueryType.genre}/>
                        {nextStoryTags &&
                            <>
                                Tags:
                                <TagsSection tagObjects={nextStoryTags} singleQueryType={SingleQueryType.tag}/>
                            </>
                        }
                    </Grid>
                </Grid>
            </TopBar>
        </Block>
    );
};

export default SearchResultBlock;
