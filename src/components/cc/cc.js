import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { useTheme } from '@material-ui/core/styles'

export default function CC({ children }) {
  var theme = useTheme()
  var buttonStyle = {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontFamily: theme.typography.body1.fontFamily,
  }

  return <CookieConsent buttonStyle={buttonStyle}>{children}</CookieConsent>
}
