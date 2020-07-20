import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { useTheme } from '@material-ui/core/styles'

import RefsContext from 'providers/refs-context'

export default function CC({ children }) {
  var { skipToMainRef } = React.useContext(RefsContext)
  var theme = useTheme()
  var buttonStyle = {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontFamily: theme.typography.body1.fontFamily,
  }

  function onAccept() {
    skipToMainRef.current.focus()
  }

  return (
    <CookieConsent
      buttonId="CookieConsentButton"
      buttonStyle={buttonStyle}
      onAccept={onAccept}
    >
      {children}
    </CookieConsent>
  )
}
