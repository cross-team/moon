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
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    lineHeight: '2.75rem',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontWeight: 'normal',
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
      <Grid className={classes.topRow} item container direction="column">
        <Typography variant="body1" component="h2" className={classes.title}>
          <a
            href={`https://medium.com/${post.username}/${post.uniqueSlug}`}
            className={classes.title}
          >
            {post.title}
          </a>
        </Typography>
        <Typography>by {post.author.name}</Typography>
      </Grid>
      <Typography className={classes.subtitle}>
        {post.content.subtitle}
      </Typography>
    </Grid>
  )
}

export default BlogPost
