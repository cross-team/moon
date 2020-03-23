import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import Header from '../header'

describe('Header', () => {
  it('renders the skip link', () => {
    let { getByTestId } = render(<Header />)
    let skipLink = getByTestId('skipLink')

    expect(skipLink).toBeInTheDocument()
  })
  it('skip link sends focus to main content', () => {
    let { getByTestId } = render(
      <>
        <Header />
        <main data-testid="mainContent" id="mainContent"></main>
      </>
    )
    let skipLink = getByTestId('skipLink')
    let mainContent = getByTestId('mainContent')

    fireEvent.click(skipLink)

    expect(mainContent).toHaveFocus()
  })
})
