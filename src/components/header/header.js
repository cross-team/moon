import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import './header.css'

import ContactContext from 'providers/contact-context'
import Logo from 'assets/svgs/cross-team-light.svg'
import NavLink from 'components/nav-link/nav-link'

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
    width: '2px',
    height: '60px',
    alignSelf: 'center',
  },
}))

export default function Header({ mainContent }) {
  var classes = useStyles()
  var contactContext = useContext(ContactContext)

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
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <NavLink to="/">
          <img className={classes.logo} src={Logo} alt="cross.team logo" />
        </NavLink>

        <Divider
          className={classes.divider}
          orientation="vertical"
          variant="middle"
          flexItem
        />

        <NavLink onClick={skipToMain} id="skipToMain">
          <Typography>Skip to Main Content</Typography>
        </NavLink>

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
      </Toolbar>
    </AppBar>
  )
}
