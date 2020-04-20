import React, { createContext, useRef } from 'react'
import PropTypes from 'prop-types'

var MainContentContext = createContext()
export default MainContentContext

export function MainContentController({ children }) {
  var mainContentRef = useRef(null)

  var value = {
    mainContentRef,
  }

  return (
    <MainContentContext.Provider value={value}>
      {children}
    </MainContentContext.Provider>
  )
}

MainContentController.propTypes = {
  children: PropTypes.element.isRequired,
}
