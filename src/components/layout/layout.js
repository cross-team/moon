import React, { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'
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

export default function Layout({ children, title }) {
  var classes = useStyles()
  var mainContent = useRef(null)

  return (
    <Theme>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Miriam+Libre&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header mainContent={mainContent} />
      <main
        className={classes.main}
        ref={mainContent}
        data-testid="mainContent"
        tabIndex="-1"
      >
        {children}
      </main>
    </Theme>
  )
}
