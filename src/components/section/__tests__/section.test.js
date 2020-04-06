import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import Section from '../section'

describe('Section', () => {
  it('renders the skip link', () => {
    let { getByText } = render(<Section />)
    let skipLink = getByText('Skip to Navigation')

    expect(skipLink).toBeInTheDocument()
  })
  it('has a skip link that sends focus back to the skip to main link in the header', () => {
    let { getByText } = render(
      <>
        <a id>Skip to Main Content</a>
        <Section />
      </>
    )
    let skipToMain = getByText('Skip to Main Content')
    let skipLink = getByText('Skip to Navigation')

    fireEvent.click(skipLink)

    setTimeout(() => {
      expect(skipToMain).toHaveFocus()
    }, 1000)
  })
})
