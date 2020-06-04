import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'

import ContactForm from 'components/contact-form/contact-form'
import ContactContext from 'providers/contact-context'

var useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
  },
  content: {
    paddingBottom: theme.spacing(4),
  },
}))

export default function ContactModal() {
  var classes = useStyles()
  var contactContext = React.useContext(ContactContext)

  return (
    <Dialog
      open={contactContext.open}
      onClose={() => contactContext.setOpen(false)}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle disableTypography>
        <Typography className={classes.title} variant="h2">
          Contact Us
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <ContactForm />
      </DialogContent>
    </Dialog>
  )
}
