import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import './header.css'
import Logo from '../../assets/svgs/cross-team-light.svg'
import NavLink from '../navLink/navLink'

var useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: '100%',
  },
  logo: {
    width: '80px',
  },
  divider: {
    height: '60px',
    alignSelf: 'center',
  },
}))

export default function Header({ mainContent }) {
  var classes = useStyles()

  function handleChange(event, newValue) {
    setTab(newValue)
  }

  function getFirstFocusableChild(children) {
    for (let child of children) {
      if (child.tabIndex == 0) return child
      if (child.children !== []) {
        let result = getFirstFocusableChild(child.children)
        if (result !== null) return result
      }
    }
    return null
  }

  function skipToMain() {
    let child = getFirstFocusableChild(mainContent.current.children)
    if (child === null) mainContent.current.focus()
    else child.focus()
  }

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <NavLink>
          <img className={classes.logo} src={Logo} alt="cross.team logo" />
        </NavLink>

        <Divider
          className={classes.divider}
          orientation="vertical"
          variant="middle"
          flexItem
        />

        <NavLink to="#" onClick={skipToMain} id="skipToMain">
          <Typography>Skip to Main Content</Typography>
        </NavLink>

        <Divider
          className={classes.divider}
          orientation="vertical"
          variant="middle"
          flexItem
        />

        <NavLink>
          <Typography>About Us</Typography>
        </NavLink>
        <NavLink>
          <Typography>Blog</Typography>
        </NavLink>
        <NavLink>
          <Typography>Resources</Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}
