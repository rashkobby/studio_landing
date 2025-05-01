import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, Divider } from '@mui/material';
import axios from 'axios';

const PIXABAY_API_KEY = '50038304-845c140fe6978ae2b7ecf5019';

const AboutInfo = () => {
  const [images, setImages] = useState({
    wedding: [],
    maternity: [],
    photoshoot: [],
  });

  const fetchImages = async (query) => {
    try {
      const response = await axios.get('https://pixabay.com/api/', {
        params: {
          key: PIXABAY_API_KEY,
          q: query,
          image_type: 'photo',
          per_page: 3,
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
      setImages({
        wedding: weddingImages,
        maternity: maternityImages,
        photoshoot: photoshootImages,
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
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          px: 3,
        }}
      >
        <Box sx={{ bgcolor: 'rgba(0,0,0,0.6)', p: 3, borderRadius: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Capturing Life’s Timeless Moments
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Premium photography for weddings, maternity, and more.
          </Typography>
          <Button
            variant="contained"
            href="#work"
            sx={{
              mt: 3,
              px: 4,
              py: 1.5,
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            View Our Work
          </Button>
        </Box>
      </Box>

      <Container sx={{ py: 4 }}>
        {/* Our Story Section */}
        <Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          At R Studios, we specialize in capturing the raw emotion, beauty, and elegance of life’s most important moments. With years of experience in wedding, maternity, and personal photography, we craft stories through the lens that last a lifetime.
        </Typography>
      </Container>

      <Divider sx={{ my: 6 }} />
      {/* Call to Action */}
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Ready to create timeless memories?
        </Typography>
        <Button
          href="/contact"
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          Book a Session
        </Button>
      </Container>
    </Box>
  );
};

export default AboutInfo;
