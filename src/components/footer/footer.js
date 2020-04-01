import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

var useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    color: theme.palette.primary.contrastText,
    width: '72%',
    paddingBottom: theme.spacing(8),
    margin: 'auto',
  },
  heading: {
    fontSize: '1.25rem',
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    '&:focus': {
      color: theme.palette.secondary.main,
    },
  },
}))

export default function Footer() {
  var classes = useStyles()

  return (
    <footer className={classes.root}>
      <Grid className={classes.container} container justify="space-around">
        <Grid item xs={3} container direction="column">
          <Typography className={classes.heading} variant="overline">
            cross.team
          </Typography>
          <Link className={classes.link} to="/">
            <Typography>Item 1</Typography>
          </Link>
          <Link className={classes.link} to="/">
            <Typography>Item 2</Typography>
          </Link>
          <Link className={classes.link} to="/">
            <Typography>Item 3</Typography>
          </Link>
        </Grid>
        <Grid item xs={3} container direction="column">
          <Typography className={classes.heading} variant="overline">
            Blog
          </Typography>
          <Link className={classes.link} to="/">
            <Typography>Item 1</Typography>
          </Link>
          <Link className={classes.link} to="/">
            <Typography>Item 2</Typography>
          </Link>
          <Link className={classes.link} to="/">
            <Typography>Item 3</Typography>
          </Link>
        </Grid>
        <Grid item xs={3} container direction="column">
          <Typography className={classes.heading} variant="overline">
            Resources
          </Typography>
          <Link className={classes.link} to="/">
            <Typography>Item 1</Typography>
          </Link>
          <Link className={classes.link} to="/">
            <Typography>Item 2</Typography>
          </Link>
          <Link className={classes.link} to="/">
            <Typography>Item 3</Typography>
          </Link>
        </Grid>
        <Grid item xs={3} container direction="column">
          <Typography className={classes.heading} variant="overline">
            Contact Us
          </Typography>
          <Link className={classes.link} to="/">
            <Typography>Item 1</Typography>
          </Link>
          <Link className={classes.link} to="/">
            <Typography>Item 2</Typography>
          </Link>
          <Link className={classes.link} to="/">
            <Typography>Item 3</Typography>
          </Link>
        </Grid>
      </Grid>
    </footer>
  )
}
