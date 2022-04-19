import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import { AppBar, IconButton, Drawer, Box, Button, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const pages = ['Home', 'Shop', 'About', 'Locations'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <AppBar position="static" color="navbar">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 1, color: 'primary.main', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="upload picture"
              component="span"
              disableRipple={true}
              disableTouchRipple={true}
              style={{zIndex: 9999}} 
              sx={{
                color: 'primary.main',
                '&:hover': {
                  color: 'primary.light'
                }
              }}
            >
              {menuOpen ? <CloseIcon /> :  <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="top"
        open={menuOpen}
      >
        <ul>
          {pages.map(page =>
            <li key={page}>{page}</li>
          )}
        </ul>

      </Drawer>
    </>
  );
};

export default Navbar;
