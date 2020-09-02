import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import ContactContext from 'providers/contact-context'

var useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.components.light.bgColor,
    borderRadius: '8px',
  },
  itemContainer: {
    width: '100%',
  },
  textfield: {
    width: '96%',
  },
}))

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm({ closeModal }) {
  var classes = useStyles()
  var [state, setState] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
  })
  var contactContext = React.useContext(ContactContext)

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
        closeModal()
        contactContext.setSuccess(true)
      })
      .catch(error => {
        alert(error)
        contactContext.setError(true)
      })
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
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item className={classes.itemContainer} container justify="center">
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
        <Grid item className={classes.itemContainer} container justify="center">
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
        <Grid item className={classes.itemContainer} container justify="center">
          <TextField
            className={classes.textfield}
            required
            type="email"
            name="email"
            value={state.email}
            id="email"
            label="Email"
            variant="filled"
            onChange={handleChange}
          />
        </Grid>
        <Grid item className={classes.itemContainer} container justify="center">
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
          <Button
            size="large"
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
