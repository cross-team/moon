import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import Header from '../header'
import MockLayout from '../mockLayout'

describe('Header', () => {
  it('renders the skip link', () => {
    let { getByText } = render(<Header />)
    let skipLink = getByText('Skip to Main Content')

    expect(skipLink).toBeInTheDocument()
  })
  it('has a skip link that sends focus to main content', () => {
    let { getByText, getByTestId } = render(<MockLayout />)
    let skipLink = getByText('Skip to Main Content')
    let mainContent = getByTestId('mainContent')

    fireEvent.click(skipLink)

    setTimeout(() => {
      expect(mainContent).toHaveFocus()
    }, 1000)
  })
})
