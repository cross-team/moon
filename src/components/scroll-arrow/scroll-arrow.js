import React from 'react'
import Arrow from '@material-ui/icons/ExpandMoreRounded'
import { makeStyles } from '@material-ui/core/styles'

import './scroll-arrow.css'

var useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.primary.contrastText,
    fontSize: '6rem',
  },
}))

export default function ScrollArrow({ onClick }) {
  var classes = useStyles()
  return (
    <div className="arrow bounce">
      <Arrow className={classes.icon} onClick={onClick} />
    </div>
  )
}
