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
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const pages = ['Home', 'About', 'Gallery'];
const services = ['Login','SignUp'];

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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        StudioName
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <Link key={page} to={page === 'Home' ? '/' : `/${page.toLowerCase()}`} style={{ textDecoration: 'none' }}>
            <ListItem button="true">
              <ListItemText primary={page} />
            </ListItem>
          </Link>
        ))}
        <Divider />
        {services.map((service) => (
          <ListItem button="true" key={service}>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Studio
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {pages.map((page) => (
              <Link key={page} to={page === 'Home' ? '/' : `/${page.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                <Button color="inherit">{page}</Button>
              </Link>
            ))}
              <Button color="inherit" onClick={handleServicesClick}>
                Account
              </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleServicesClose}
            >
              {services.map((service) => (
                <MenuItem component={Link}  to={`/${service}`}key={service} onClick={handleServicesClose}>
                  {service}
                </MenuItem>
              ))}
            </Menu>

            {/* Social Icons */}
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

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
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
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
