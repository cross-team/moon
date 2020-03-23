import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import Header from '../header'
import MockLayout from '../mockLayout'

describe('Header', () => {
  it('renders the skip link', () => {
    let { getByTestId } = render(<Header />)
    let skipLink = getByTestId('skipLink')

    expect(skipLink).toBeInTheDocument()
  })
  it('has a skip link that sends focus to main content', () => {
    let { getByTestId } = render(<MockLayout />)
    let skipLink = getByTestId('skipLink')
    let mainContent = getByTestId('mainContent')

    fireEvent.click(skipLink)

    setTimeout(() => {
      expect(mainContent).toHaveFocus()
    }, 1000)
  })
})
