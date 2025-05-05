import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';

const pages = [
  { text: 'Home', to: '/', icon: <HomeIcon /> },
  { text: 'About', to: '/about', icon: <InfoIcon /> },
  { text: 'Gallery', to: '/gallery', icon: <PhotoLibraryIcon /> },
];

const services = [
  { text: 'Log in', to: '/login', icon: <LoginIcon /> },
  { text: 'Sign Up', to: '/signup', icon: <PersonAddIcon /> },
];

const drawerWidth = 280;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleServicesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: drawerWidth }} role="presentation" onClick={handleDrawerToggle}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6">Studio</Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {pages.map(({ text, to, icon }) => (
          <Link key={text} to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem button='true'>
              <Box sx={{ minWidth: 36 }}>{icon}</Box>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {services.map(({ text, to, icon }) => (
          <Link key={text} to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem button='true'>
              <Box sx={{ minWidth: 36 }}>{icon}</Box>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Studio
            </Typography>

            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

            {/* Desktop Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              {pages.map(({ text, to }) => (
                <Link key={text} to={to} style={{ textDecoration: 'none' }}>
                  <Button color="inherit">{text}</Button>
                </Link>
              ))}
              <Button color="inherit" onClick={handleServicesClick}>
                Account
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleServicesClose}>
                {services.map(({ text, to }) => (
                  <MenuItem component={Link} to={to} key={text} onClick={handleServicesClose}>
                    {text}
                  </MenuItem>
                ))}
              </Menu>
              <IconButton href="#" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
