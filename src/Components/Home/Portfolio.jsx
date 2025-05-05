import React, { useState, useEffect } from 'react';
import { Box, Container, CircularProgress, Card, CardMedia, Button } from '@mui/material';
import { Masonry } from '@mui/lab';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PIXABAY_API_KEY = '50038304-845c140fe6978ae2b7ecf5019';

const searchTerms = ['wedding', 'events', 'photoshoot', 'maternity'];
const IMAGES_PER_TERM = 10; // fetch 10 per keyword

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const Portfolio = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThemedPhotos = async () => {
      setLoading(true);

      try {
        const requests = searchTerms.map((term) =>
          axios.get('https://pixabay.com/api/', {
            params: {
              key: PIXABAY_API_KEY,
              q: term,
              image_type: 'photo',
              per_page: IMAGES_PER_TERM,
            },
          })
        );

        const results = await Promise.allSettled(requests);
        const imageData = results
          .filter((res) => res.status === 'fulfilled')
          .flatMap((res) =>
            res.value.data.hits.map((photo) => ({
              url: photo.webformatURL,
              height: Math.floor(200 + Math.random() * 100),
            }))
          );

        const shuffled = shuffleArray(imageData).slice(0, 30); 
        setPhotos(shuffled);
      } catch (err) {
        console.error('Failed to fetch themed photos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchThemedPhotos();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, md: 0 }, py: 6 }}>
      {loading ? (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {photos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card sx={{ overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height={item.height}
                  image={item.url}
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                />
              </Card>
            </motion.div>
          ))}
        </Masonry>
      )}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
  <Button
    component={Link}
    to="/gallery"
    variant="outlined"
    sx={{
      padding: '12px 30px',
      fontSize: '1rem',
      fontWeight: 500,
      borderRadius: 50,
      textTransform: 'none',
      color: 'text.primary',
      borderColor: 'text.secondary',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#f4f4f4',
        transform: 'scale(1.05)',
        borderColor: 'text.primary',
      },
    }}
  >
    View More...
  </Button>
</Box>

    </Container>
  );
};

export default Portfolio;
