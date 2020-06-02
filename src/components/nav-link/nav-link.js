import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

var useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '2px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  link: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
}))

export default function NavLink({
  label = '',
  to = '#',
  onClick,
  id,
  children,
}) {
  var classes = useStyles()

  return (
    <Grid item className={classes.root} onClick={onClick && onClick}>
      {to.charAt(0) === '/' ? (
        <Link className={classes.link} to={to} id={id && id}>
          {label && <Typography component="span">{label}</Typography>}
          {children}
        </Link>
      ) : (
        <a className={classes.link} href={to} id={id && id}>
          {label && <Typography component="span">{label}</Typography>}
          {children}
        </a>
      )}
    </Grid>
  )
}
