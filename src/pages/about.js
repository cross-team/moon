import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import SEO from 'components/SEO/SEO'
import Layout from 'components/layout/layout'

var useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  contentContainer: {
    backgroundColor: '#fefefe',
    color: '#222',
    padding: theme.spacing(8),
    '& a': {
      color: '#04f',
    },
  },
  title: {
    padding: theme.spacing(8),
  },
}))

export var POSTS_QUERY = graphql`
  query {
    github {
      repository(name: "moon", owner: "cross-team") {
        issues(first: 1, filterBy: { labels: "about" }) {
          nodes {
            bodyHTML
          }
        }
      }
    }
  }
`

function About({ data }) {
  var classes = useStyles()

  return (
    <>
      <Layout title="About">
        <Grid className={classes.root} container direction="column">
          <Typography variant="h1" className={classes.title}>
            About
          </Typography>
          <Grid
            container
            direction="column"
            className={classes.contentContainer}
          >
            <Typography
              dangerouslySetInnerHTML={{
                __html: data.github.repository.issues.nodes[0].bodyHTML,
              }}
            />
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export default About
