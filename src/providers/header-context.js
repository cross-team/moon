import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

var HeaderContext = createContext()
export default HeaderContext

export function HeaderController({ children }) {
  var [open, setOpen] = useState(false)

  var value = {
    open,
    setOpen,
  }

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  )
}

HeaderController.propTypes = {
  children: PropTypes.element.isRequired,
}
