import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Layout from 'components/layout/layout'
import BlogPost from 'components/blog-post/blog-post'

var useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    '& a': {
      color: '#04f',
    },
  },
  postsContainer: {
    backgroundColor: '#fefefe',
    padding: theme.spacing(6),
    marginTop: theme.spacing(6),
  },
  textContainer: {
    padding: theme.spacing(8),
  },
  hr: {
    border: 'none',
    borderTop: 'medium double #333',
    color: '#333',
    overflow: 'visible',
    textAlign: 'center',
    width: '80%',
    height: '5px',
    '&:after': {
      content: '"§"',
      position: 'relative',
      top: '-13px',
      padding: '0 4px',
      background: 'white',
    },
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
    <>
      <BlogPost post={post.node} />
      <hr className={classes.hr} />
    </>
  ))

  return (
    <>
      <Layout title="Blog">
        <Grid className={classes.root} container direction="column">
          <Grid className={classes.textContainer} container direction="column">
            <Typography variant="h1">Blog Posts</Typography>
            <Typography>
              The following is a list of our original posts about inclusive
              design and development best practices.
            </Typography>
          </Grid>
          <Grid className={classes.postsContainer} container direction="column">
            {posts}
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export default Blog
