import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

var useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    padding: theme.spacing(4),
    margin: theme.spacing(8),
    backgroundColor: theme.palette.components.light.bgColor,
    borderRadius: '8px',
  },
  textfield: {
    width: '100%',
  },
}))

export default function ContactForm() {
  var classes = useStyles()
  return (
    <form
      className={classes.root}
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="bot-field" />
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            className={classes.textfield}
            required
            label="First Name"
            variant="filled"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfield}
            required
            label="Last Name"
            variant="filled"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfield}
            required
            label="Email"
            variant="filled"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfield}
            label="Company"
            variant="filled"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
