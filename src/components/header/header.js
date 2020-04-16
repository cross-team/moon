import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'

import './header.css'

import { getFirstFocusableChild } from 'utils/functions'
import ContactContext from 'providers/contact-context'
import Logo from 'assets/svgs/cross-team-light.svg'
import NavLink from 'components/nav-link/nav-link'

var useStyles = makeStyles(theme => ({
  toolbar: props => ({
    display: 'flex',
    justifyContent:
      props.width === 'xs' || props.width === 'sm' ? 'center' : 'flex-start',
    height: '100%',
  }),
  logo: {
    width: '80px',
  },
  divider: {
    width: '2px',
    height: '60px',
    alignSelf: 'center',
  },
}))

function Header({ mainContent, width }) {
  var classes = useStyles({ width })
  var contactContext = useContext(ContactContext)
  var [anchorEl, setAnchorEl] = useState(null)

  function skipToMain() {
    let child = getFirstFocusableChild(mainContent.current.children)
    if (child === null) mainContent.current.focus()
    else child.focus()
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget)
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
        {width === 'xs' || width === 'sm' ? (
          <>
            <NavLink aria-controls="site-menu" onClick={handleMenu}>
              <MenuIcon />
            </NavLink>
            <Menu
              id="site-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => setAnchorEl(null)}>About Us</MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>Blog</MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>Resources</MenuItem>
              <MenuItem
                onClick={() => {
                  setAnchorEl(null)
                  contactContext.setOpen(true)
                }}
              >
                Contact Us
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <NavLink label="About Us" />
            <NavLink label="Blog" />
            <NavLink label="Resources" />
            <NavLink
              label="Contact Us"
              onClick={() => contactContext.setOpen(true)}
            />
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default withWidth()(Header)
