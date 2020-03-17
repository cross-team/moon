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
      light: '#fff',
      main: '#fafafa',
      dark: '#eee',
      contrastText: '#000',
    },
  },
})

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
