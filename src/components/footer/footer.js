import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import NavLink from 'components/nav-link/nav-link'
import ContactContext from 'providers/contact-context'

var useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    padding: theme.spacing(8),
  },
  copyright: {
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(8),
  },
}))

function Footer() {
  var contactContext = React.useContext(ContactContext)
  var classes = useStyles()
  var theme = useTheme()
  var smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <footer className={classes.root}>
      <Grid className={classes.container} container alignItems="center">
        <NavLink label="Home" to="/" />
        <NavLink label="About Us" to="/about/" />
        <NavLink label="Blog" to="/blog/" />
        <NavLink
          label="Contact Us"
          onClick={() => contactContext.setOpen(true)}
        />
        <NavLink label="Accessibility Statement" to="/statement/" />
      </Grid>
      <Typography className={classes.copyright}>
        © 2020 Cross.Team, Inc.
      </Typography>
    </footer>
  )
}

export default Footer
