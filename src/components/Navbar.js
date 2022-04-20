import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import github from "../img/github-icon.svg";
import { AppBar, IconButton, Drawer, Box, Button, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useScrollPosition from '@react-hook/window-scroll';

const pages = ['Home', 'Shop', 'About', 'Locations'];
const maxLogoSize = 200;
const minLogoSize = 80;
const minAtScrollPosition = 300;
const logoTransition = '1s ease 0s';

const calcLogoSize = (scrollY) => {
  if (scrollY >= minAtScrollPosition) {
    return minLogoSize;
  } else {
    return (maxLogoSize - minLogoSize) * 
      (1 - scrollY / minAtScrollPosition) + minLogoSize;
  }
};

const Logo = () => {
  const scrollY = useScrollPosition(10)
  const size = calcLogoSize(scrollY);
  return (
    <StaticImage
      src='../img/mars.png'
      alt="Mars"
      placeholder="blurred"
      width={maxLogoSize}
      height={maxLogoSize}
      formats={["png", "webp"]}
      style={{
        position: 'absolute',
        top: 16,
        left: '6%',
        zIndex: 9999,
      }}
      imgStyle={{
        transition: `width ${logoTransition}, height ${logoTransition}`,
        width: size,
        height: size,
      }}
  />
  )
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <AppBar position="fixed" color="navbar">
        <Logo />
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
