import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import ContactModal from 'components/contact-modal/contact-modal'
import SEO from 'components/SEO/SEO'
import CC from 'components/cc/cc'
import Theme from 'providers/theme'

import { ContactController } from 'providers/contact-context'
import MainContentContext from 'providers/main-content-context'

import './layout.css'

var useStyles = makeStyles(theme => ({
  main: props => ({
    width: '100%',
    margin: 'auto',
    paddingTop: props.title !== 'Home' ? '96px' : 'auto',
  }),
  skipLink: {
    display: 'inline-block',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
}))

export default function Layout({ children, landing, title, test = false }) {
  var classes = useStyles({ title })
  var { mainContentRef } = useContext(MainContentContext)

  if (process.env.NODE_ENV !== 'production') {
    import('react-axe').then(axe => {
      axe.default(React, ReactDOM, 1000)
    })
  }

  return (
    <Theme>
      <ContactController>
        <>
          {!test && <SEO title={title} />}
          <Header fixed={true} alwaysFixed={title !== 'Home' ? true : false} />
          {title === 'Home' && <Header />}
          <main className={classes.main}>
            <ContactModal />
            <Grid container direction="column">
              {landing}
              <div ref={mainContentRef} data-testid="mainContent">
                {children}
              </div>
            </Grid>
          </main>
        </>
        <Footer />
      </ContactController>
      <CC>This website uses cookies to enhance the user experience.</CC>
    </Theme>
  )
}
