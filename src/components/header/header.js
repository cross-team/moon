import React, { useContext, useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Menu from '@material-ui/core/Menu'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'

import './header.css'

import { skipToMain } from 'utils/functions'
import ContactContext from 'providers/contact-context'
import RefsContext from 'providers/refs-context'
import Logo from 'assets/svgs/cross-team-light.svg'
import StyledMenuItem from 'components/styled-menu-item/styled-menu-item'
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
  appbar: props => ({
    top: props.alwaysFixed ? '0' : '-96px',
  }),
  logo: {
    width: '80px',
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
  menuItem: {
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    '&:focus': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
}))

function Header({ fixed = false, alwaysFixed = false }) {
  var contactContext = useContext(ContactContext)
  var { mainContentRef, skipToMainRef } = useContext(RefsContext)
  var [anchorEl, setAnchorEl] = useState(null)
  var [isHidden, setIsHidden] = useState(!alwaysFixed)
  var theme = useTheme()
  var smallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  var classes = useStyles({ smallScreen, alwaysFixed })

  useEffect(() => {
    if (!fixed || alwaysFixed) {
      setTimeout(() => {
        console.log(document.getElementById('CookieConsentButton') === null)
        document.getElementById('CookieConsentButton') === null &&
          skipToMainRef.current.focus()
      }, 1)
    }

    function handleScroll() {
      if (alwaysFixed) return null
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

    if (fixed && !alwaysFixed) {
      window.addEventListener('scroll', handleScroll)
    } else {
      window.removeEventListener('scroll', handleScroll)
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [alwaysFixed, fixed])

  function handleMenu(event) {
    setAnchorEl(event.currentTarget)
  }

  var content = (
    <>
      {fixed && (
        <>
          <NavLink to="/">
            <img
              className={classes.logo}
              src={Logo}
              alt="The Cross.Team logo is illustrated as a Swiss Army knife, representing the effectiveness and agility of cross-functional teams."
            />
          </NavLink>
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
          id={`skipToMain${fixed && 'F'}`}
          ref={skipToMainRef}
        >
          <Typography>Skip to Content</Typography>
        </a>
      </Grid>

      {smallScreen ? (
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
            <StyledMenuItem
              onClick={() => {
                setAnchorEl(null)
                navigate('/about/')
              }}
            >
              About Us
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => {
                setAnchorEl(null)
                navigate('/blog/')
              }}
            >
              Blog
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => {
                setAnchorEl(null)
                contactContext.setOpen(true)
              }}
            >
              Contact Us
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => {
                setAnchorEl(null)
                navigate('/statement/')
              }}
            >
              Accessibility Statement
            </StyledMenuItem>
          </Menu>
        </>
      ) : (
        <>
          <NavLink label="About Us" to="/about/" />
          <NavLink label="Blog" to="/blog/" />
          <NavLink
            label="Contact Us"
            onClick={() => contactContext.setOpen(true)}
          />
          <NavLink label="Accessibility Statement" to="/statement/" />
        </>
      )}
    </>
  )

  if (fixed) {
    return (
      <AppBar position="fixed" id="appbar" className={classes.appbar}>
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
      title="static header"
      role="banner"
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
