import React from 'react'
import { motion } from 'framer-motion';
import { Typography, Box, Container, Button, Grid, } from '@mui/material';

const Stats = () => {
    const MotionBox = motion.create(Box);
    const MotionTypography = motion.create(Typography);
  return (
    <div>
        <Box 
        sx={{ 
          py: { xs: 6, md: 12 },
          background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }
        }}
      >
          <MotionTypography 
            variant="h2" 
            sx={{ 
              textAlign: 'center', 
              mb: 8, 
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Why Choose Us
          </MotionTypography>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {[
              { number: '500+', text: 'Happy Clients' },
              { number: '1000+', text: 'Captured Moments' },
              { number: '8+', text: 'Years Experience' }
            ].map((stat, index) => (
              <Grid  key={index} display="flex" justifyContent="center">
                <MotionBox 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  sx={{ 
                    textAlign: 'center',
                    p: 4,
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      mb: 2,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      fontWeight: 700,
                      background: 'linear-gradient(45deg, #fff, #e3f2fd)',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.9)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {stat.text}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
      </Box>


      {/* Call to Action */}
      <Container sx={{ py: { xs: 6, md: 12 }, textAlign: 'center' }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 3, 
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to Create Timeless Memories?
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ 
              mb: 6,
              fontWeight: 300,
              letterSpacing: '0.05em',
              color: '#424242'
            }}
          >
            Let's discuss your vision and create something extraordinary together
          </Typography>
          <Button
            href="/contact"
            variant="contained"
            size="large"
            sx={{
              px: 8,
              py: 2.5,
              fontSize: '1.2rem',
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              color: 'white',
              borderRadius: 50,
              boxShadow: '0 10px 20px rgba(26, 35, 126, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #0d47a1, #1a237e)',
                transform: 'translateY(-2px)',
                boxShadow: '0 15px 30px rgba(26, 35, 126, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Book Your Session
          </Button>
        </MotionBox>
      </Container>
    </div>
  )
}

export default Stats;