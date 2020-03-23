import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

var theme = createMuiTheme({
  palette: {
    primary: {
      light: '#424242',
      main: '#222',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8bbcf4',
      main: '#1673DF',
      dark: '#1054a2',
      contrastText: '#fff',
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
