import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Layout from '../layout'

describe('Layout', () => {
  it('skip to main sends focus to main content container when main content has no focusble children', () => {
    let { getByText, getByTestId } = render(<Layout noSQL={true} />)
    let skipLink = getByText('Skip to Main Content')
    let mainContent = getByTestId('mainContent')

    fireEvent.click(skipLink)

    setTimeout(() => {
      expect(mainContent).toHaveFocus()
    }, 1000)
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

    setTimeout(() => {
      expect(firstFocusableElement).toHaveFocus()
    }, 1000)
  })
})
