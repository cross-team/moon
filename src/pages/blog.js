import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import SEO from 'components/SEO/SEO'
import Layout from 'components/layout/layout'
import BlogPost from 'components/blog-post/blog-post'

var useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(8),
  },
}))

export var POSTS_QUERY = graphql`
  query {
    allMediumPost {
      edges {
        node {
          title
          content {
            subtitle
          }
          author {
            name
            username
          }
          uniqueSlug
        }
      }
    }
  }
`

function Blog({ data }) {
  var classes = useStyles()

  var posts = data.allMediumPost.edges.map(post => (
    <BlogPost post={post.node} />
  ))

  return (
    <>
      <SEO title="Blog" />
      <Layout>
        <Grid className={classes.root} container direction="column">
          <Typography variant="h1">Blog Posts</Typography>
          <Grid className={classes.postsContainer} container direction="column">
            {posts}
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export default Blog
