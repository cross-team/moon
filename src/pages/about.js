import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import SEO from 'components/SEO/SEO'
import Layout from 'components/layout/layout'

var useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(8),
  },
}))

function About() {
  var classes = useStyles()

  return (
    <>
      <Layout title="About">
        <Grid className={classes.root} container direction="column">
          <Typography variant="h1">About</Typography>
        </Grid>
      </Layout>
    </>
  )
}

export default About
