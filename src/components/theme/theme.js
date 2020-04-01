import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

var theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fefefe',
      main: '#222',
      dark: '#000',
      contrastText: '#fefefe',
    },
    secondary: {
      light: '#80a2ff',
      main: '#04f',
      dark: '#0030b3',
      contrastText: '#fefefe',
    },
    divider: 'rgba(254, 254, 254, .5)',
    components: {
      dark: {
        bgColor: '#222',
        textColor: '#fefefe',
        focusColor: '#04f',
        linkColor: '#ffec00',
      },
      light: {
        bgColor: '#fefefe',
        textColor: '#222',
        focusColor: '#f00',
        linkColor: '#04f',
      },
      blue: {
        bgColor: '#04f',
        textColor: '#fefefe',
        focusColor: '#f00',
        linkColor: '#ffec00',
      },
    },
  },
  typography: {
    fontFamily: "'Miriam Libre', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: '600',
    },
    body1: {
      fontSize: '1.25rem',
    },
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
})

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
