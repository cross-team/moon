import React, { useRef, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import { skipToMain } from 'utils/functions'
import MainContentContext from 'providers/main-content-context'
import NavLink from 'components/nav-link/nav-link'

var useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  divider: {
    width: '2px',
    height: '60px',
  },
  skipLink: {
    borderRadius: '2px',
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}))

export default function TopHeader() {
  var classes = useStyles()
  var { mainContentRef } = useContext(MainContentContext)
  var skipLinkRef = useRef(null)

  useEffect(() => {
    skipLinkRef.current.focus()
  }, [])

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justify="flex-start"
    >
      <a
        className={classes.skipLink}
        href="#"
        onClick={() => skipToMain(mainContentRef)}
        ref={skipLinkRef}
      >
        <Typography>Skip to Main Content</Typography>
      </a>
      <Divider
        className={classes.divider}
        orientation="vertical"
        variant="middle"
        flexItem
      />
      <NavLink label="About Us" />
      <NavLink label="Blog" />
      <NavLink label="Resources" />
      <NavLink
        label="Contact Us"
        onClick={() => contactContext.setOpen(true)}
      />
    </Grid>
  )
}
