import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import Layout from '../layout'
import SelectInput from '@material-ui/core/Select/SelectInput'

describe('Layout', () => {
  it('skip to main sends focus to main content container when main content has no focusble children', () => {
    let { getByText, getByTestId } = render(<Layout />)
    let skipLink = getByText('Skip to Main Content')
    let mainContent = getByTestId('mainContent')

    fireEvent.click(skipLink)

    expect(mainContent).toHaveFocus()
  })
  it('skip to main sends focus to first focusable element inside the main content container', () => {
    let { getByText, getByTestId } = render(
      <Layout noSQL={true}>
        <a href="#" data-testid="firstFocusableElement">
          Hello World!
        </a>
      </Layout>
    )
    let skipLink = getByText('Skip to Main Content')
    let firstFocusableElement = getByTestId('firstFocusableElement')

    fireEvent.click(skipLink)

    expect(firstFocusableElement).toHaveFocus()
  })
  it('Contact Us tab opens contact form modal', () => {
    let { getAllByText, getByLabelText } = render(<Layout />)
    let modalButton = getAllByText('Contact Us')

    fireEvent.click(modalButton[0])

    let field = getByLabelText('first name', { exact: false })
    expect(field).toBeInTheDocument()

    fireEvent.keyPress(field, { key: 'Escape', code: 'Escape' })

    // expect(field).not.toBeInTheDocument()
  })
})
