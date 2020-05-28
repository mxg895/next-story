import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const LoadingSign: React.FC<{}> = () => {
  return (
    <Container>
      <Typography variant='h3'>Loading...</Typography>
    </Container>
  );
};

export default LoadingSign;
