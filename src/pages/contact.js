import React from 'react'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/layout/layout'
import Section from '../components/section/section'
import ContactForm from '../components/contactForm/contactForm'

export default function Contact() {
  return (
    <Layout title="Contact Us">
      <Section heading="Contact Us">
        <Grid container justify="center">
          <ContactForm />
        </Grid>
      </Section>
    </Layout>
  )
}
