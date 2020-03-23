import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/layout/layout'
import Section from '../components/section/section'

export default () => (
  <Layout title="cross.team - Home">
    <Grid container direction="column">
      <Grid item>
        <Section heading="Section 1">
          <Typography>Section 1 Content.</Typography>
        </Section>
      </Grid>
    </Grid>
  </Layout>
)
