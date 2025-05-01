import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  CircularProgress,
  Card,
  CardMedia,
} from '@mui/material';
import { Masonry } from '@mui/lab';
import axios from 'axios';
import { motion } from 'framer-motion';
import GalleryHero from './GalleryHero';

const PIXABAY_API_KEY = '50038304-845c140fe6978ae2b7ecf5019';

const GalleryService = ({ serviceName }) => {
  const [tab, setTab] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [bannerUrl, setBannerUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
    const fetchBannerImage = async () => {
      try {
        const res = await axios.get('https://pixabay.com/api/', {
          params: {
            key: PIXABAY_API_KEY,
            q: serviceName,
            image_type: 'photo',
            page: 1,
          },
        });
        setBannerUrl(res.data.hits[0]?.largeImageURL || '');
      } catch {
        setBannerUrl('');
      }
    };

    const fetchPhotos = async () => {
      try {
        const res = await axios.get('https://pixabay.com/api/', {
          params: {
            key: PIXABAY_API_KEY,
            q: serviceName,
            image_type: 'photo',
            per_page: 15,
          },
        });
        const images = res.data.hits.map((photo) => ({
          type: 'photo',
          url: photo.webformatURL,
          height: Math.floor(200 + Math.random() * 100),
        }));
        setPhotos(images);
      } catch {
        setPhotos([]);
      }
    };

    const fetchVideos = async () => {
      try {
        const res = await axios.get('https://pixabay.com/api/videos/', {
          params: {
            key: PIXABAY_API_KEY,
            q: serviceName,
            per_page: 5,
          },
        });
        const vids = res.data.hits.map((video) => ({
          type: 'video',
          url: video.videos.medium.url,
          height: 200,
        }));
        setVideos(vids);
      } catch {
        setVideos([]);
      }
    };

    setLoading(true);
    Promise.all([fetchBannerImage(), fetchPhotos(), fetchVideos()]).finally(() =>
      setLoading(false)
    );
  }, [serviceName]);

  const shuffle = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getMediaToDisplay = () => {
    if (tab === 1) return photos;
    if (tab === 2) return videos;
    return shuffle([...photos, ...videos]);
  };

  return (
    <div className="folio">
      {/* Banner */}
      <GalleryHero banner={bannerUrl} Details={`${serviceName} Gallery`} />

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={handleChange}
        centered
        aria-label="media type tabs"
        sx={{ mb: 3 }}
      >
        <Tab label="All" />
        <Tab label="Photos" />
        <Tab label="Videos" />
      </Tabs>

      {/* Media */}
      {loading ? (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {getMediaToDisplay().map((media, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card sx={{ overflow: 'hidden' }}>
                {media.type === 'photo' ? (
                  <CardMedia
                    component="img"
                    height={media.height}
                    image={media.url}
                    alt={`Photo ${index}`}
                  />
                ) : (
                  <CardMedia
                    component="video"
                    height={media.height}
                    src={media.url}
                    autoPlay
                    muted
                    loop
                    controls={false}
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default GalleryService;
