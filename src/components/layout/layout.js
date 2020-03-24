import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
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

  if (process.env.NODE_ENV !== 'production') {
    import('react-axe').then(axe => {
      axe.default(React, ReactDOM, 1000)
    })
  }

  return (
    <Theme>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Miriam+Libre&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header mainContent={mainContent} />
      <main className={classes.main} ref={mainContent} tabIndex="-1">
        {children}
      </main>
    </Theme>
  )
}
