import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Footer from './Footer'; 
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    > 
      <CssBaseline/>
      <Navbar />

      <Box component="main" flexGrow={1}>
        {/* <Container> */}
          {children}
        {/* </Container> */}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
