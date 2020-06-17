import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

var useStyles = makeStyles(theme => ({
  services: {
    marginTop: theme.spacing(4),
  },
}))

function Services() {
  var classes = useStyles()
  var servicesData = [
    {
      title: 'Accessibility',
      content: `As the world changes to adjust to COVID-19, more than ever before,
      businesses need clear Accessibility and Procurement policies in place.
      Our team of Accessibility experts can get your organization started
      with a proper and cost-effective Accessibility strategy.`,
    },
    {
      title: 'Workshops',
      content: `Enterprise training approach combines in-person instruction and online
      learning with relevant content and an adaptive curriculum for User
      Experience Design practices and Digital Accessibility.`,
    },
    {
      title: 'User Research',
      content: `We partner with a network of usability pool of participants covering
      any demographic and disability needs.`,
    },
    {
      title: 'Discovery',
      content: `Dive into the idea, explore opportunities and assess the competitors
      through Design Thinking methodologies.`,
    },
    {
      title: 'Design',
      content: `Experts in building a product visual language, design token
      architecture and complete Design Systems. Expertly crafted bespoke
      platforms built with Accessibility in mind from day-1 to scale and
      succeed.`,
    },
    {
      title: 'Development',
      content: `Accessible front-end development ensures people with different
      abilities can access, understand, and navigate web content, regardless
      of how they’re accessing it. Our front-end developers collaborate with
      other members of a cross-functional team to implement a robust user
      experience.`,
    },
    {
      title: 'Social Media',
      content: `Digital Marketing is also maturing to become responsibly inclusive.
      Our Social Media strategy is based on best practices to ensure that
      your online content is usable and accessible to all citizens,
      including those with disabilities.`,
    },
    {
      title: 'Online Reputation',
      content: `The recent wave of web accessibility lawsuits and scandals have put
      organizations in reputation management crises and hefty legal
      expenses. We have the process in place to help protecting your
      branding and recovering from any negative social wave.`,
    },
    {
      title: 'Influencer Marketing',
      content: `Connecting your business with targeted audiences can be a waste of
      investment. We can connect you with the right people that influence
      your audience on a daily-basis, effectively conveying the values of
      your brand.`,
    },
  ]

  return (
    <Grid container spacing={4} className={classes.services}>
      {servicesData.map(service => (
        <Grid item xs={12} md={4} key={service.title}>
          <h3 aria-level="2">{service.title}</h3>
          <Typography>{service.content}</Typography>
        </Grid>
      ))}
    </Grid>
  )
}

export default Services
