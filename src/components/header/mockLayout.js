import React from 'react'

import Header from './header'

export default function MockLayout() {
  var mainContent = React.useRef(null)

  return (
    <>
      <Header mainContent={mainContent} />
      <main ref={mainContent} data-testid="mainContent"></main>
    </>
  )
}
