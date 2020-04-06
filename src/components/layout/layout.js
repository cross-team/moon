import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'

import SEO from '../SEO/SEO'
import Header from '../header/header'
import Footer from '../footer/footer'
import Theme from '../theme/theme'

import './layout.css'

var useStyles = makeStyles(theme => ({
  main: {
    width: '100%',
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
      <SEO title={title} />
      <Header mainContent={mainContent} />
      <main className={classes.main} ref={mainContent} tabIndex="-1">
        {children}
      </main>
      <Footer />
    </Theme>
  )
}
