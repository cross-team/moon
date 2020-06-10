import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'

import './header.css'

import { skipToMain } from 'utils/functions'
import ContactContext from 'providers/contact-context'
import MainContentContext from 'providers/main-content-context'
import Logo from 'assets/svgs/cross-team-light.svg'
import NavLink from 'components/nav-link/nav-link'

var useStyles = makeStyles(theme => ({
  root: props => ({
    padding: theme.spacing(2),
  }),
  toolbar: props => ({
    display: 'flex',
    justifyContent: props.smallScreen ? 'center' : 'flex-start',
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
  skipLinkContainer: {
    border: `4px solid ${theme.palette.primary.main}`,
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '4px',
    },
    '&:focus-within': {
      border: '4px solid white',
      backgroundColor: theme.palette.secondary.main,
    },
  },
  skipLink: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  menu: {},
}))

function Header({ hidden = false }) {
  var contactContext = useContext(ContactContext)
  var { mainContentRef } = useContext(MainContentContext)
  var [anchorEl, setAnchorEl] = useState(null)
  var [isHidden, setIsHidden] = useState(true)
  var theme = useTheme()
  var smallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  var classes = useStyles({ smallScreen, hidden })
  var skipLinkRef = React.useRef(null)

  React.useEffect(() => {
    if (!hidden) skipLinkRef.current.focus()
  }, [])

  function handleMenu(event) {
    setAnchorEl(event.currentTarget)
  }

  var content = (
    <>
      {hidden && (
        <>
          <NavLink to="/">
            <img
              className={classes.logo}
              src={Logo}
              alt="The Cross.Team logo is illustrated as a Swiss Army knife, representing the effectiveness and agility of cross-functional teams."
            />
          </NavLink>

          <Divider
            className={classes.divider}
            orientation="vertical"
            variant="middle"
            flexItem
          />
        </>
      )}

      <Grid
        item
        className={classes.skipLinkContainer}
        onClick={() => skipToMain(mainContentRef)}
      >
        <a
          className={classes.skipLink}
          href="#"
          id="skipToMain"
          ref={skipLinkRef}
        >
          <Typography>Skip to Content</Typography>
        </a>
      </Grid>

      <Divider
        className={classes.divider}
        orientation="vertical"
        variant="middle"
        flexItem
      />

      {smallScreen ? (
        <>
          <NavLink aria-controls="site-menu" onClick={handleMenu}>
            <MenuIcon />
          </NavLink>
          <Menu
            className={classes.menu}
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
    </>
  )

  function handleScroll() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.getElementById('appbar').style.top = '0'
      setIsHidden(false)
    } else {
      document.getElementById('appbar').style.top = '-96px'
      setIsHidden(true)
    }
  }

  if (hidden) {
    if (typeof window !== 'undefined') {
      window.onscroll = handleScroll
    }

    return (
      <AppBar position="fixed" id="appbar">
        <Toolbar
          className={`${classes.toolbar} ${isHidden ? 'displayNone' : ''}`}
          data-testid="header"
        >
          {content}
        </Toolbar>
      </AppBar>
    )
  }

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justify={smallScreen ? 'space-evenly' : 'flex-start'}
    >
      {content}
    </Grid>
  )
}

export default Header
