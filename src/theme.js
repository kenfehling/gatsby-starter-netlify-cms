import { createTheme, colors } from '@mui/material';

const baseTheme = {
    breakpoints: {
        values: {
            xs: 1,
            sm: 360,
            md: 640,
            lg: 960,
            xl: 1080
        }
    },
    typography: {
        h1: {
            fontSize: 32,
            fontWeight: 700,
            fontFamily: ['Rajdhani']
        },
        h3: {
            fontSize: 24,
            fontWeight: 700,
            fontFamily: ['Rajdhani']
        }
    },
};

const lightTheme = {
    palette: {
        primary: {
            main: `#556cd6`,
        },
        secondary: {
            main: `#19857b`,
        },
        error: {
            main: colors.red.A400,
        },
        background: {
            default: `#fff`,
        },
        navbar: {
            main: '#FF9933'
        }
  }
};

const darkTheme = {
    palette: {
        primary: {
            main: '#FFBB77'
        },
        secondary: {
            main: `#19857b`,
        },
        error: {
            main: colors.red.A400,
        },
        background: {
            default: `#262626`,
        },
        navbar: {
            main: '#121212'
        }
  }
};

const getTheme = (mode) => {
    return createTheme({
        mode,
        ...baseTheme,
        ...(mode === 'light' ? lightTheme : darkTheme)
    })
};

export default getTheme;
