import React from 'react'
import { render } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import Header from '../header'

describe('Header', () => {
  it('renders the skip link', () => {
    let { getByText } = render(<Header />)
    let skipLink = getByText('Skip to Main Content')

    expect(skipLink).toBeInTheDocument()
  })
})
