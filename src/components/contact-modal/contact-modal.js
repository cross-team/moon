import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Snackbar from '@material-ui/core/Snackbar'

import ContactForm from 'components/contact-form/contact-form'
import ContactContext from 'providers/contact-context'
import { Grid } from '@material-ui/core'

var useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
  },
  content: {
    paddingBottom: theme.spacing(4),
  },
  close: {
    color: theme.palette.primary.main,
    alignSelf: 'flex-start',
    '&:focus, &:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
  success: {
    '& .MuiSnackbarContent-root': {
      backgroundColor: theme.palette.success.main,
    },
  },
  error: {
    '& .MuiSnackbarContent-root': {
      backgroundColor: theme.palette.error.main,
    },
  },
}))

export default function ContactModal() {
  var classes = useStyles()
  var contactContext = React.useContext(ContactContext)

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    contactContext.setSuccess(false)
  }

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    contactContext.setError(false)
  }

  return (
    <>
      <Dialog
        open={contactContext.open}
        onClose={() => contactContext.setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle disableTypography>
          <Grid container direction="column" alignItems="center">
            <IconButton
              disableFocusRipple
              aria-label="close contact modal"
              className={classes.close}
              onClick={() => contactContext.setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
            <Typography className={classes.title} variant="h2">
              Contact Us
            </Typography>
          </Grid>
        </DialogTitle>
        <DialogContent className={classes.content}>
          <ContactForm closeModal={() => contactContext.setOpen(false)} />
        </DialogContent>
      </Dialog>
      <Snackbar
        className={classes.success}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={true}
        // autoHideDuration={5000}
        onClose={handleCloseSuccess}
        message="Success!"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSuccess}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <Snackbar
        className={classes.error}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={contactContext.error}
        autoHideDuration={5000}
        onClose={handleCloseError}
        message="Error"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseError}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  )
}
