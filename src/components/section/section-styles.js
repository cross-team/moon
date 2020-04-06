import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

var useStyles = makeStyles(theme => ({
  root: props => {
    let styles = {
      // minHeight: '93vh',
      width: '100%',
      textAlign: 'center',
      borderRadius: '0px',
      color: theme.palette.components[props.color].textColor,
      backgroundColor: theme.palette.components[props.color].bgColor,
    }
    if (props.bgImg) {
      styles = {
        ...styles,
        backgroundImage: `url(${props.bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: `${hexToRgbA(
          theme.palette.components[props.color].bgColor,
          '.5'
        )} 0 0 0 1000px inset`,
      }
    }
    return styles
  },
  content: {
    width: '84%',
    margin: 'auto',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  skipLink: props => ({
    alignSelf: 'flex-end',
    color: theme.palette.components[props.color].linkColor,
    margin: theme.spacing(1),
  }),
  playerContainer: {
    width: '80%',
    overflow: 'hidden',
    height: '0',
    // paddingTop is 80% (width) of the aspect ratio (56.25%) of a typical video
    paddingTop: '45% !important',
    position: 'relative',
  },
  player: {
    position: 'absolute',
    top: '0',
    left: '0',
  },
  transcript: {
    margin: theme.spacing(4),
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(4),
  },
}))

function hexToRgbA(hex, opacity = '1') {
  var c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return `rgba(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${c & 255}, ${opacity})`
  }
  throw new Error('Bad Hex')
}

export default useStyles
