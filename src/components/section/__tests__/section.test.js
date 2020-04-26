import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import Section from 'components/section/section'
import Theme from 'providers/theme'

describe('Section', () => {
  it.only('renders the skip link', () => {
    let { getByText } = render(
      <Theme>
        <Section />
      </Theme>
    )
    let skipLink = getByText('Skip to Navigation')

    expect(skipLink).toBeInTheDocument()
  })
  it('has a skip link that sends focus back to the skip to main link in the header', async () => {
    let { getByText } = render(
      <Theme>
        <a>Skip to Main Content</a>
        <Section />
      </Theme>
    )
    let skipToMain = getByText('Skip to Main Content')
    let skipToNav = getByText('Skip to Navigation')

    fireEvent.click(skipToNav)

    setTimeout(() => {
      expect(skipToMain).toHaveFocus()
    }, 1000)
  })
})
