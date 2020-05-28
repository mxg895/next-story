import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const NotFound: React.FC = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h1'>Page Not Found</Typography>
    </Container>
  );
};

export default NotFound;
