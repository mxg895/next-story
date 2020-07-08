import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowRight from '@material-ui/icons/ArrowRight';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import styled from 'styled-components';

const GridContainer = styled(Grid)`
  &.MuiGrid-container {
    flex-wrap: nowrap;
  }
`;

const StyledInput = styled(OutlinedInput)`
  &.MuiOutlinedInput-root {
    border-radius: 4px 0 0 4px;
  }
`;

const StyledGrid = styled(Grid)`
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-left: none;
  border-radius: 0 4px 4px 0;
  :hover{
    cursor: pointer;
  }
`;

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`;

const SearchBar: React.FC = () => {
  return(
    <div>
      <GridContainer container spacing={0} alignItems='stretch'>
        <Grid item>
          <StyledInput name='search' type='search' placeholder='Search' />
        </Grid>
        <StyledGrid item>
          <StyledDiv><ArrowRight fontSize='large'/></StyledDiv>
        </StyledGrid>
      </GridContainer>
    </div>
  );
};

export default SearchBar;
