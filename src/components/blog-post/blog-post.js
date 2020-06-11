import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

var useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    margin: 'auto',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    width: '100%',
  },
  username: {
    marginLeft: theme.spacing(2),
  },
  title: {
    width: '100%',
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}))

function BlogPost({ post }) {
  var classes = useStyles()
  return (
    <Grid className={classes.root} container direction="column">
      <Grid
        className={classes.topRow}
        item
        container
        wrap="nowrap"
        justify="space-evenly"
        alignItems="center"
      >
        <Typography variant="h4" component="h2" className={classes.title}>
          {post.title}
        </Typography>
        <Grid item container alignItems="center" justify="flex-end">
          <Typography variant="h6" component="p">
            {post.author.name}
          </Typography>
          <Typography className={classes.username} variant="h6" component="p">
            @{post.author.username}
          </Typography>
        </Grid>
      </Grid>
      <Typography className={classes.subtitle}>
        {post.content.subtitle}
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        href={`https://medium.com/${post.username}/${post.uniqueSlug}`}
      >
        Read More...
      </Button>
    </Grid>
  )
}

export default BlogPost
