import React, { createContext, useRef } from 'react'
import PropTypes from 'prop-types'

var RefsContext = createContext()
export default RefsContext

export function RefsController({ children }) {
  var mainContentRef = useRef(null)
  var skipToMainRef = useRef(null)

  var value = {
    mainContentRef,
    skipToMainRef,
  }

  return <RefsContext.Provider value={value}>{children}</RefsContext.Provider>
}

RefsController.propTypes = {
  children: PropTypes.element.isRequired,
}
