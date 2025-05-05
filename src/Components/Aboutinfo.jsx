import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, Divider, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Stats from './Stats';

const PIXABAY_API_KEY = '50038304-845c140fe6978ae2b7ecf5019';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const AboutInfo = () => {
  const [images, setImages] = useState({
    wedding: [],
    maternity: [],
    photoshoot: [],
    graduation: [],
    engagement: [],
  });

  const fetchImages = async (query) => {
    try {
      const response = await axios.get('https://pixabay.com/api/', {
        params: {
          key: PIXABAY_API_KEY,
          q: query,
          image_type: 'photo',
          page: 1,
        },
      });
      return response.data.hits;
    } catch (error) {
      console.error('Error fetching images:', error);
      return [];
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      const weddingImages = await fetchImages('wedding');
      const maternityImages = await fetchImages('maternity');
      const photoshootImages = await fetchImages('photoshoot');
      const graduationImages = await fetchImages('graduation'); 
      const engagementImages = await fetchImages('engagement'); 
      
      setImages({
        wedding: weddingImages,
        maternity: maternityImages,
        photoshoot: photoshootImages,
        graduation: graduationImages, 
        engagement: engagementImages, 
      });
    };
    loadImages();
  }, []);


  return (
    <Box sx={{ bgcolor: '#f8f8f8' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${images.wedding[0]?.largeImageURL || '/images/hero.jpg'})`,
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
          }
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
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
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
              letterSpacing: '0.02em'
            }}
          >
            Capturing Life's Timeless Moments
          </MotionTypography>
          <MotionTypography 
            variant="h4" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              fontWeight: 300,
              letterSpacing: '0.05em'
            }}
          >
            Where Every Click Tells a Story
          </MotionTypography>
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              component={Link}
              variant="contained"
              to="/gallery"
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
              Explore Our Portfolio
            </Button>
          </MotionBox>
        </MotionBox>
      </Box>

      <Container sx={{ py: { xs: 6, md: 8 } }}>
        {/* Our Story Section */}
        <Grid container spacing={6} alignItems="center">
          <Grid>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 4,
                  fontSize: { xs: '2rem', md: '3rem' },
                  background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Our Story
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  mb: 3, 
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#424242'
                }}
              >
                Founded in 2015, R Studios has been at the forefront of creative photography, capturing life's most precious moments with artistic vision and technical excellence.
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  mb: 3, 
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#424242'
                }}
              >
                Our team of passionate photographers combines years of experience with a fresh perspective, ensuring that each session is unique and memorable.
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#424242'
                }}
              >
                We believe that photography is more than just taking pictures – it's about creating lasting memories that tell your story.
              </Typography>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ mx: 4 }} />

      <Box sx={{ bgcolor: '#f5f5f5', py: 6 }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 600,
              color: '#1a237e',
            }}
          >
            Our Services
          </Typography>
          <Grid 
            container 
            spacing={4} 
            justifyContent="center" 
            sx={{ maxWidth: '1200px', margin: '0 auto' }}
          >
            {[
              {
                title: 'Wedding Photography',
                image: images.wedding[1]?.largeImageURL,
                description: 'Elegant and emotional wedding moments captured timelessly.',
              },
              {
                title: 'Maternity Sessions',
                image: images.maternity[1]?.largeImageURL,
                description: 'Celebrate the beauty of motherhood with artistic maternity shots.',
              },
              {
                title: 'Portrait Photography',
                image: images.photoshoot[1]?.largeImageURL,
                description: 'Classic and contemporary portraits that tell your story.',
              },
              {
                title: 'Graduation Photography',
                image: images.graduation[1]?.largeImageURL,
                description: 'Capture the proud moments of your graduation day.',
              },
              {
                title: 'Engagement Photography',
                image: images.engagement[1]?.largeImageURL,
                description: 'Celebrate the beginning of your journey together with engagement portraits.',
              },
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    width: '100%', // Make sure the cards take full width within the grid item
                    height: '100%',
                    maxWidth: 300, // Set fixed card width for uniformity
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  {service.image && (
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: '100%',
                        height: 200, // Set consistent image height
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  <CardContent sx={{ px: 2, py: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '1.125rem',
                        mb: 1,
                        fontWeight: 500,
                        color: '#1a237e',
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                        height: '100%', // Ensure description takes full height
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {service.description.length > 100
                        ? service.description.slice(0, 97) + '...'
                        : service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Stats/>
    </Box>
  );
};

export default AboutInfo;
