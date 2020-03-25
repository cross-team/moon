import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import Header from '../header'
import MockLayout1 from '../mockLayout1'
import MockLayout2 from '../mockLayout2'

describe('Header', () => {
  it('renders the skip link', () => {
    let { getByText } = render(<Header />)
    let skipLink = getByText('Skip to Main Content')

    expect(skipLink).toBeInTheDocument()
  })
  it('sends focus to main content container when main content has no focusble children', () => {
    let { getByText, getByTestId } = render(<MockLayout1 />)
    let skipLink = getByText('Skip to Main Content')
    let mainContent = getByTestId('mainContent')

    fireEvent.click(skipLink)

    setTimeout(() => {
      expect(mainContent).toHaveFocus()
    }, 1000)
  })
  it('sends focus to first focusable element inside the main content container', () => {
    let { getByText, getByTestId } = render(<MockLayout2 />)
    let skipLink = getByText('Skip to Main Content')
    let firstFocusableElement = getByTestId('firstFocusableElement')

    fireEvent.click(skipLink)

    setTimeout(() => {
      expect(firstFocusableElement).toHaveFocus()
    }, 1000)
  })
})
