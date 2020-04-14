import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'

import ContactForm from 'components/contact-form/contact-form'
import ContactContext from 'providers/contact-context'

var useStyles = makeStyles(theme => ({}))

export default function ContactModal() {
  var classes = useStyles()
  var contactContext = React.useContext(ContactContext)

  return (
    <Dialog
      open={contactContext.open}
      onClose={() => contactContext.setOpen(false)}
    >
      <DialogTitle>Contact Us</DialogTitle>
      <DialogContent>
        <ContactForm />
      </DialogContent>
    </Dialog>
  )
}
