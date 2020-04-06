import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import { Grid } from '@material-ui/core'

var useStyles = makeStyles(theme => ({
  card: {
    minHeight: '600px',
  },
  media: {
    height: '200px',
  },
  chips: {
    marginBottom: theme.spacing(2),
  },
  chip: {
    marginRight: theme.spacing(2),
  },
}))

export default function LinkCard({
  to = '/',
  image = '',
  tags = [],
  title = '',
  content = '',
}) {
  var classes = useStyles()
  var card = (
    <Card className={classes.card}>
      {image && <CardMedia className={classes.media} image={image} />}
      <CardContent>
        {tags && (
          <Grid
            className={classes.chips}
            container
            alignItems="center"
            justify="flex-start"
          >
            {tags.map(tag => (
              <Chip
                className={classes.chip}
                label={tag.toUpperCase()}
                color="secondary"
              />
            ))}
          </Grid>
        )}
        <Typography variant="h2">{title}</Typography>
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  )

  return (
    <>
      {to.charAt(0) === '/' ? (
        <Link to={to}>{card}</Link>
      ) : (
        <a href={to}>{card}</a>
      )}
    </>
  )
}
