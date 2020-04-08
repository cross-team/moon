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
  var [state, setState] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
  })

  function handleChange(e) {
    console.log(e.target)
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
            name="firstName"
            value={state.firstName}
            id="firstName"
            label="First Name"
            variant="filled"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfield}
            required
            name="lastName"
            value={state.lastName}
            id="lastName"
            label="Last Name"
            variant="filled"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfield}
            required
            name="email"
            value={state.email}
            id="email"
            label="Email"
            variant="filled"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textfield}
            name="company"
            value={state.company}
            id="company"
            label="Company"
            variant="filled"
            onChange={handleChange}
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
