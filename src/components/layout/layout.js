import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'

import SEO from 'components/SEO/SEO'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import ContactModal from 'components/contact-modal/contact-modal'

import Theme from 'providers/theme'
import { ContactController } from 'providers/contact-context'

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
      <ContactController>
        <Header mainContent={mainContent} />
        <main className={classes.main} ref={mainContent} tabIndex="-1">
          <ContactModal />
          {children}
        </main>
      </ContactController>
      <Footer />
    </Theme>
  )
}
