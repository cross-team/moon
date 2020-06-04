import React from 'react'
import { render } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import { ContactController } from 'providers/contact-context'
import { MainContentController } from 'providers/main-content-context'
import Header from '../header'

describe('Header', () => {
  it('renders the skip link', () => {
    let { getByText } = render(
      <ContactController>
        <MainContentController>
          <Header />
        </MainContentController>
      </ContactController>
    )
    let skipLink = getByText('Skip to Main Content')

    expect(skipLink).toBeInTheDocument()
  })
})
