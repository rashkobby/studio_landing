import React from 'react';
import Layout from '../Components/Layout';
import Hero from '../Components/Home/Hero';
import Portfolio from '../Components/Home/Portfolio';
import { Typography, Box, Container } from '@mui/material';

const Home = () => {
  return (
    <Layout>
      {/* Optional Hero Component */}
      <Hero />

      {/* Main Content */}
      <Container maxWidth="lg">
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 500,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Snippets of Our Works
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              maxWidth: 700,
              mx: 'auto',
              color: 'text.secondary',
              mb: 6,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            A curated collection from recent events, capturing beauty,
            emotion, and timeless moments.
          </Typography>

          <Portfolio />
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
