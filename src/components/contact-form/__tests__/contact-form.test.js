import React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'

import ContactForm from '../contact-form'
import Theme from 'providers/theme'

describe('Contact Form', () => {
  var { getByLabelText } = render(
    <Theme>
      <ContactForm />
    </Theme>
  )
  it('renders each field with its label', () => {
    let firstName = getByLabelText('first name', { exact: false })
    let lastName = getByLabelText('last name', { exact: false })
    let email = getByLabelText('email', { exact: false })
    let company = getByLabelText('company', { exact: false })

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(company).toBeInTheDocument()
  })
})
