import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

var useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    margin: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    width: '100%',
    borderRadius: '5px',
  },
  authorContainer: {
    flexShrink: '4',
  },
  username: {
    marginLeft: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  title: {
    width: '100%',
  },
  subtitle: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    '&:focus': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}))

function BlogPost({ post }) {
  var classes = useStyles()
  var theme = useTheme()
  var mediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid className={classes.root} container direction="column">
      <Grid
        className={classes.topRow}
        item
        container
        wrap={mediumScreen ? 'wrap' : 'nowrap'}
        justify="space-evenly"
        alignItems="center"
      >
        <Typography variant="h4" component="h2" className={classes.title}>
          {post.title}
        </Typography>
        <Grid
          className={classes.authorContainer}
          item
          container
          alignItems="center"
          justify={mediumScreen ? 'flex-start' : 'flex-end'}
        >
          <Typography variant="h6" component="p">
            {post.author.name}
          </Typography>
          <Typography variant="h6" component="p">
            <a
              href={`https://medium.com/@${post.username}`}
              className={classes.username}
            >
              @{post.author.username}
            </a>
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
        disableFocusRipple
        href={`https://medium.com/${post.username}/${post.uniqueSlug}`}
      >
        Read More...
      </Button>
    </Grid>
  )
}

export default BlogPost
