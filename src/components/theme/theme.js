import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

var theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fefefe',
      main: '#222',
      dark: '#222',
      contrastText: '#fefefe',
    },
    secondary: {
      light: '#80a2ff',
      main: '#04f',
      dark: '#0030b3',
      contrastText: '#fefefe',
    },
  },
  typography: {
    fontFamily: "'Miriam Libre', 'Helvetica', 'Arial', sans-serif",
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
