import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import './header.css'

var useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  tabs: {
    alignSelf: 'flex-end',
  },
  tab: {
    '&:focus': {
      border: '2px solid',
      borderColor: theme.palette.secondary.light,
      borderRadius: '4px',
    },
  },
}))

export default function Header({ mainContent }) {
  var classes = useStyles()
  var [tab, setTab] = useState(0)

  function handleChange(event, newValue) {
    setTab(newValue)
  }

  function skipToMain() {
    console.log(mainContent)
    mainContent.current.focus()
  }

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <a
          href="#"
          onClick={skipToMain}
          id="skipToMain"
          data-testid="skipLink"
          className={classes.skipLink}
        >
          <Typography>Skip to Main Content</Typography>
        </a>
        <Tabs
          className={classes.tabs}
          value={tab}
          onChange={handleChange}
          aria-label="Site Navigation"
        >
          <Tab className={classes.tab} disableRipple label="Tab 1" />
          <Tab className={classes.tab} disableRipple label="Tab 2" />
          <Tab className={classes.tab} disableRipple label="Tab 3" />
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
