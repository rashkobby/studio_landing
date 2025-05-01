import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
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
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, maxWidth: 'lg' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: '500',
            fontFamily: '"merriweather", serif',
            fontStyle: 'italic',
            marginBottom: 2,
            fontSize: { xs: '2.2rem', sm: '3rem' },
            letterSpacing: 2,
            textTransform: 'uppercase',
            lineHeight: 1.1,
            opacity: 0.9,
          }}
        >
          Capture Your Most Precious Moments
        </Typography>
        <Typography className='merriweather-light'
          variant="h5"
          sx={{
            fontWeight: '300',
            fontSize: { xs: '1.1rem', sm: '1.3rem' },
            fontFamily: '"Playfair Display", serif',
            marginBottom: 6,
            maxWidth: '600px',
            margin: '0 auto',
            opacity: 0.8,
          }}
        >
          From weddings to engagements, let us tell your story through stunning photography.
        </Typography>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          sx={{
            padding: '12px 40px',
            fontSize: '1.1rem',
            fontWeight: '500',
            borderRadius: 50, 
            letterSpacing: 1,
            textTransform: 'none', 
            boxShadow: 'none',
            marginTop: 4,
            '&:hover': {
              transform: 'scale(1.05)', 
              transition: 'all 0.3s ease',
            },
          }}
        >
          Book a slot Today!
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
