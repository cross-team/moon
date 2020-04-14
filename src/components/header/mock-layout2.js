import React from 'react'

import Header from './header'

export default function MockLayout2() {
  var mainContent = React.useRef(null)

  return (
    <>
      <Header mainContent={mainContent} />
      <main ref={mainContent}>
        <span>Hello World!</span>
        <a href="#" data-testid="firstFocusableElement">
          Link
        </a>
      </main>
    </>
  )
}
