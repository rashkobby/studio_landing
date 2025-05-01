import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Container, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const albumTypes = ['Weddings', 'Nature', 'Urban', 'Portraits','Maternity', 'Engagements', 'Graduations', 'sunset', 'Wildlife'];

const ACCESS_KEY = '50038304-845c140fe6978ae2b7ecf5019';

const AlbumGallery = () => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const results = {};
        await Promise.all(
          albumTypes.map(async (type) => {
            const res = await axios.get('https://pixabay.com/api/', {
              params: {
                key: ACCESS_KEY,
                q: type,  
                image_type: 'photo',
                orientation: 'horizontal',  
                page: 1,
              },
            });
            results[type] = res.data.hits[0]?.webformatURL; 
          })
        );
        setImages(results);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching images from Pixabay:', err);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <Container sx={{ textAlign: 'center', mt: 5 }}><CircularProgress /></Container>;

  return (
    <Container 
        sx={{ 
            mt: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
        }}
        >
        <Typography variant="h4" gutterBottom align="center">
            Explore Album Categories
        </Typography>

        <Grid 
            container 
            spacing={4} 
            justifyContent="center" 
            sx={{ maxWidth: '1200px' }}
        >
            {albumTypes.map((type) => (
            <Grid item key={type}>
                <Card sx={{ height: '100%' }}>
                <CardActionArea onClick={() => navigate(`/gallery/${type.toLowerCase()}`)}>
                    <CardMedia
                    component="img"
                    height="220"  // Increased from 160
                    image={images[type]}
                    alt={type}
                    />
                    <CardContent>
                    <Typography variant="h6" component="div" align="center">
                        {type}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            ))}
        </Grid>
    </Container>

  );
};

export default AlbumGallery;
