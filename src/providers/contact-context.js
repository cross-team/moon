import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

var ContactContext = createContext()
export default ContactContext

export function ContactController({ children }) {
  var [open, setOpen] = useState(false)
  var [error, setError] = useState(false)
  var [success, setSuccess] = useState(false)

  var value = {
    open,
    setOpen,
    error,
    setError,
    success,
    setSuccess,
  }

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  )
}

ContactController.propTypes = {
  children: PropTypes.element.isRequired,
}
