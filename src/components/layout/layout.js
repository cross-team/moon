import React, { useRef, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import ContactModal from 'components/contact-modal/contact-modal'

import { skipToMain } from 'utils/functions'
import Theme from 'providers/theme'
import { ContactController } from 'providers/contact-context'
import MainContentContext from 'providers/main-content-context'

import './layout.css'

var useStyles = makeStyles(theme => ({
  main: {
    width: '100%',
    margin: 'auto',
  },
  skipLink: {
    display: 'inline-block',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
}))

export default function Layout({ children }) {
  var classes = useStyles()
  var { mainContentRef } = useContext(MainContentContext)
  var skipLinkRef = useRef(null)

  useEffect(() => {
    skipLinkRef.current.focus()
  }, [])

  if (process.env.NODE_ENV !== 'production') {
    import('react-axe').then(axe => {
      axe.default(React, ReactDOM, 1000)
    })
  }

  return (
    <Theme>
      <ContactController>
        <Header />
        <a
          href="#"
          onClick={() => skipToMain(mainContentRef)}
          className={classes.skipLink}
          ref={skipLinkRef}
        >
          <Typography>Skip to Main Content</Typography>
        </a>
        <main
          className={classes.main}
          ref={mainContentRef}
          tabIndex="-1"
          data-testid="mainContent"
        >
          <ContactModal />
          {children}
        </main>
      </ContactController>
      <Footer />
    </Theme>
  )
}
