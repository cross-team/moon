import React from 'react'
import Arrow from '@material-ui/icons/ExpandMoreRounded'
import { makeStyles } from '@material-ui/core/styles'

import './scroll-arrow.css'

var useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.primary.contrastText,
    fontSize: '6rem',
  },
  iconContainer: {
    maxWidth: '96px',
  },
}))

export default function ScrollArrow({ onClick }) {
  var classes = useStyles()
  return (
    <a
      aria-label="Skip to content"
      className={`arrow bounce ${classes.iconContainer}`}
      href="#"
      onClick={onClick}
    >
      <Arrow className={classes.icon} />
    </a>
  )
}
