import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

var useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    border: '2px solid',
    borderColor: theme.palette.primary.dark,
    marginTop: theme.spacing(2),
  },
  skipLink: {
    alignSelf: 'flex-end',
    color: '#000',
    margin: theme.spacing(1),
  },
}))

export default function Section({ children, heading = '' }) {
  var classes = useStyles()

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
