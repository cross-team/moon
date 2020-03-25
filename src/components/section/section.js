import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

var useStyles = makeStyles(theme => ({
  root: props => ({
    height: '100vh',
    width: '100%',
    borderRadius: '0px',
    backgroundColor: props.bgColor,
    color: props.textColor,
  }),
  skipLink: props => ({
    alignSelf: 'flex-end',
    color: props.linkColor,
    margin: theme.spacing(1),
  }),
}))

export default function Section({ children, color = 'dark', heading = '' }) {
  var styleProps = {
    dark: {
      bgColor: '#222',
      textColor: '#fefefe',
      focusColor: '#04f',
      linkColor: '#ffec00',
    },
    light: {
      bgColor: '#fefefe',
      textColor: '#222',
      focusColor: '#f00',
      linkColor: '#04f',
    },
  }
  var classes = useStyles(styleProps[color])

  return (
    <Card className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <a
          href="#skipToMain"
          data-testid="skipLink"
          className={classes.skipLink}
        >
          <Typography>Skip to Navigation</Typography>
        </a>
        <Typography variant="h1">{heading}</Typography>
        <CardContent>{children}</CardContent>
      </Grid>
    </Card>
  )
}
