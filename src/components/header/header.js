import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import { Link } from 'gatsby'
import './header.css'

var useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  tabs: {
    alignSelf: 'flex-end',
  },
}))

export default function Header() {
  const classes = useStyles()
  var [tab, setTab] = useState(0)

  function handleChange(event, newValue) {
    setTab(newValue)
  }

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Link to="#mainContent" className={classes.skipLink}>
          <Typography>Skip to Main Content</Typography>
        </Link>
        <Tabs
          className={classes.tabs}
          value={tab}
          onChange={handleChange}
          aria-label="Site Navigation"
        >
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
