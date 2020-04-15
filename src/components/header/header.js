import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

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
        {width === 'xs' || width === 'sm' ? null : (
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
