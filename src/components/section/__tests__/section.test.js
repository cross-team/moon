import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import Section from '../section'

describe('Section', () => {
  it('renders the skip link', () => {
    let { getByTestId } = render(<Section />)
    let skipLink = getByTestId('skipLink')

    expect(skipLink).toBeInTheDocument()
  })
  it('has a skip link that sends focus back to the skip to main link in the header', () => {
    let { getByText, getByTestId } = render(
      <>
        <a id>Skip to Main Content</a>
        <Section />
      </>
    )
    let skipToMain = getByText('Skip to Main Content')
    let skipLink = getByTestId('skipLink')

    fireEvent.click(skipLink)

    setTimeout(() => {
      expect(skipToMain).toHaveFocus()
    }, 1000)
  })
})
