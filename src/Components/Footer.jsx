import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      py={3}
      px={2}
      textAlign="center"
      bgcolor="#f5f5f5"
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} StudioName. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
