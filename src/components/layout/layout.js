import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Header from '../header/header'
import Theme from '../theme/theme'

import './layout.css'

var useStyles = makeStyles(theme => ({
  main: {
    width: '90%',
    margin: 'auto',
  },
}))

export default function Layout({ children }) {
  var classes = useStyles()

  return (
    <Theme>
      <Header />
      <main className={classes.main} id="mainContent">
        {children}
      </main>
    </Theme>
  )
}
