import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { navigate } from 'gatsby-link'
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

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm() {
  var classes = useStyles()

  var [state, setState] = React.useState({})

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    let form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => {
        console.log(state)
        navigate('/')
      })
      .catch(error => alert(error))
  }

  return (
    <form
      className={classes.root}
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            className={classes.textfield}
            required
            name="first-name"
            id="first-name"
            label="First Name"
            variant="filled"
            handleChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfield}
            required
            name="last-name"
            id="last-name"
            label="Last Name"
            variant="filled"
            handleChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfield}
            required
            name="email"
            id="email"
            label="Email"
            variant="filled"
            handleChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfield}
            name="company"
            id="company"
            label="Company"
            variant="filled"
            handleChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
