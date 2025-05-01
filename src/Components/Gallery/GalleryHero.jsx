import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const GalleryHero = ({banner, Details}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '40vh',
        backgroundImage: `url(${banner})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          opacity: 0.9
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, maxWidth: 'lg' }}>
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            padding: '12px 24px',
            borderRadius: 2,
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: 2,
            fontFamily: '"Merriweather", serif',
            fontStyle: 'italic',
          }}
        >
          {Details}
        </Typography>
      </Container>
    </Box>
  );
};

export default GalleryHero;
