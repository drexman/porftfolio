import { extendTheme } from '@chakra-ui/react';

import '../assets/fonts/Moderat-Bold.otf';
import '../assets/fonts/Moderat-Regular.otf';
import '../assets/fonts/index.css';

const Modal = {
  baseStyle: {
    close: {
      boxShadow: 'lg',
      rounded: 'lg',
      flexDirection: 'column',
      py: '2',
    },
  },
};

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#ffffff',
      200: '#f9f9f9',
      300: '#dcdcdc',
      400: '#adaeb6',
      500: '#54565a',
      600: '#000000',
    },
    secondary: {
      200: '#f6dbcd',
      300: '#FF6600',
      500: '#ff6a13',
    },
    tertiary: {
      200: '#fbf4e1',
      500: '#ffc72c',
    },
    quaternary: {
      400: '#006c69',
    },
    quintenary: {
      400: '#2f68d4',
    },
    error: {
      100: '#E61705',
      300: '#FF1805',
      500: '#400601',
    },
  },
  fonts: {
    heading: 'Moderat Bold',
    body: 'Moderat Regular',
  },
  components: {
    Modal,
    Heading: {
      baseStyle: {
        color: 'primary.200',
      },
    },
  },
  styles: {
    global: {
      html: { background: '#54565a' },
      h1: { color: 'primary.500' },
      p: { color: 'primary.500' },
      body: {
        bg: 'gray.50',
      },
      button: {
        bg: 'secondary.500',
        color: 'primary.100',
      },
      input: {
        _placeholder: {
          color: 'primary.400',
        },
      },
      _disabled: {
        cursor: 'not-allowed',
      },
    },
  },
});