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

export var POSTS_QUERY = graphql`
  query {
    github {
      repository(name: "moon", owner: "cross-team") {
        issues(first: 1, filterBy: { labels: "a11y" }) {
          nodes {
            bodyHTML
          }
        }
      }
    }
  }
`

function A11yStatement({ data }) {
  var classes = useStyles()

  return (
    <>
      <Layout title="Accessibility Statement">
        <Grid className={classes.root} container direction="column">
          <Typography variant="h1">Accessibility Statement</Typography>
          <Typography
            dangerouslySetInnerHTML={{
              __html: data.github.repository.issues.nodes[0].bodyHTML,
            }}
          />
        </Grid>
      </Layout>
    </>
  )
}

export default A11yStatement
