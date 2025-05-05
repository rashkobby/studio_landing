import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

// Motion components
const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1573676048035-9c2a72b6a12a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        px: 1,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
        },
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: 'relative',
          p: { xs: 3, md: 6 },
          borderRadius: 2,
          maxWidth: '1000px',
          width: '100%', 
          mx: 'auto',    
          height: 'auto', 
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)', // add this for subtle light tint
          border: '1px solid rgba(255, 255, 255, 0.1)', // soften border
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)', // more subtle shadow
          overflow: 'hidden',
        }}
      >
        <MotionTypography
          variant="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2.5rem', md: '4rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '0.02em',
          }}
        >
          Frame the Feeling
        </MotionTypography>
        <MotionTypography
          variant="h4"
          sx={{
            mb: 4,
            fontSize: { xs: '1.2rem', md: '1.8rem' },
            fontWeight: 300,
            letterSpacing: '0.05em',
          }}
        >
          We don’t just take pictures — we capture emotions.
        </MotionTypography>
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            component={Link}
            to="/login"
            variant="contained"
            sx={{
              mt: 2,
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Book a slot Today!
          </Button>
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default Hero;
