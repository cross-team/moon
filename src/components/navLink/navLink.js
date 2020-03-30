import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

var useStyles = makeStyles(theme => ({
  root: {
    height: '80px',
    '&:hover': {
      backgroundColor: '#000',
    },
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}))

export default function NavLink({
  to = '/',
  ariaLabel,
  onClick,
  id,
  children,
}) {
  var classes = useStyles()

  return (
    <Grid item className={classes.root} onClick={onClick && onClick}>
      {to.charAt(0) === '/' ? (
        <Link className={classes.link} to={to} id={id && id}>
          {children}
        </Link>
      ) : (
        <a className={classes.link} href={to} id={id && id}>
          {children}
        </a>
      )}
    </Grid>
  )
}
