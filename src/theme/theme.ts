'use client';

import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00BAFF',
    },
    secondary: {
      main: '#006AFF',
    },
    error: {
      main: '#BB2723',
    },
    warning: {
      main: '#F9DE4B',
    },
    info: {
      main: '#53B7F9',
    },
    success: {
      main: '#39824F',
    },
    divider: '#CCCCCC',
    gradient: {
      primary: {
        main: 'linear-gradient(45deg, #00BAFF, #006AFF);',
      },
      secondary: {
        main: 'linear-gradient(-39deg, #4991f8 0%, #4bc1ff 100%)',
      },
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        contained: {
          color: '#fff',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

export default theme;
