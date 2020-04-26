import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

var useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    color: theme.palette.primary.contrastText,
    width: '72%',
    paddingBottom: theme.spacing(4),
    margin: 'auto',
  },
  linkGroup: {
    marginBottom: theme.spacing(4),
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

function Footer() {
  var classes = useStyles()
  var theme = useTheme()
  var smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <footer className={classes.root}>
      <Grid
        className={classes.container}
        container
        justify="space-around"
        direction={smallScreen ? 'column' : 'row'}
      >
        <Grid
          className={classes.linkGroup}
          item
          xs={3}
          container
          direction="column"
        >
          <Typography
            className={classes.heading}
            variant="overline"
            noWrap={true}
          >
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
        <Grid
          className={classes.linkGroup}
          item
          xs={3}
          container
          direction="column"
        >
          <Typography
            className={classes.heading}
            variant="overline"
            noWrap={true}
          >
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
        <Grid
          className={classes.linkGroup}
          item
          xs={3}
          container
          direction="column"
        >
          <Typography
            className={classes.heading}
            variant="overline"
            noWrap={true}
          >
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
        <Grid
          className={classes.linkGroup}
          item
          xs={3}
          container
          direction="column"
        >
          <Typography
            className={classes.heading}
            variant="overline"
            noWrap={true}
          >
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

export default Footer
