import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { graphql } from 'gatsby'

import SEO from 'components/SEO/SEO'
import Layout from 'components/layout/layout'
import Section from 'components/section/section'
import Logo from 'assets/svgs/cross-team-light.svg'

var useStyles = makeStyles(theme => ({
  logoContainer: {
    marginBottom: theme.spacing(16),
  },
  logo: {
    width: '36%',
  },
  tagline: {
    color: theme.palette.primary.contrastText,
  },
  section: {
    // textAlign: 'center',
  },
  service: {
    fontStyle: 'italic',
  },
  services: {
    marginTop: theme.spacing(4),
  },
}))

export var POSTS_QUERY = graphql`
  query {
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "home" } } } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        title
        content
      }
    }
  }
`

function Index({ data }) {
  var classes = useStyles()
  var theme = useTheme()
  var smallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  // var images = Object.keys(data).reduce(function dataReducer(imageSet, key) {
  //   let image = data[key].nodes[0].childImageSharp.fluid
  //   let srcArr = image.srcSet.split(',\n')
  //   let srcObj = srcArr.reduce(function srcReducer(srcSet, src) {
  //     let splitSrc = src.split(' ')
  //     return { ...srcSet, [splitSrc[1]]: splitSrc[0] }
  //   }, {})
  //   let result = {
  //     name: image.originalName,
  //     originalImg: image.originalImg,
  //     src: image.src,
  //     srcSet: srcObj,
  //   }
  //   return { ...imageSet, [key]: result }
  // }, {})

  var services = (
    <Grid container spacing={4} className={classes.services}>
      <Grid item xs={12} md={4}>
        <Typography variant="h3" className={classes.service}>
          Accessibility
        </Typography>
        <Typography>
          As the world changes to adjust to COVID-19, more than ever before,
          businesses need clear Accessibility and Procurement policies in place.
          Our team of Accessibility experts can get your organization started
          with a proper and cost-effective Accessibility strategy.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3" className={classes.service}>
          Workshops
        </Typography>
        <Typography>
          Enterprise training approach combines in-person instruction and online
          learning with relevant content and an adaptive curriculum for User
          Experience Design practices and Digital Accessibility.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3" className={classes.service}>
          User Research
        </Typography>
        <Typography>
          We partner with a network of usability pool of participants covering
          any demographic and disability needs.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3" className={classes.service}>
          Discovery
        </Typography>
        <Typography>
          Dive into the idea, explore opportunities and assess the competitors
          through Design Thinking methodologies.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3" className={classes.service}>
          Design
        </Typography>
        <Typography>
          Experts in building a product visual language, design token
          architecture and complete Design Systems. Expertly crafted bespoke
          platforms built with Accessibility in mind from day-1 to scale and
          succeed.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3" className={classes.service}>
          Development
        </Typography>
        <Typography>
          Accessible front-end development ensures people with different
          abilities can access, understand, and navigate web content, regardless
          of how they’re accessing it. Our front-end developers collaborate with
          other members of a cross-functional team to implement a robust user
          experience.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3" className={classes.service}>
          Social Media
        </Typography>
        <Typography>
          Digital Marketing is also maturing to become responsibly inclusive.
          Our Social Media strategy is based on best practices to ensure that
          your online content is usable and accessible to all citizens,
          including those with disabilities.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3" className={classes.service}>
          Online Reputation
        </Typography>
        <Typography>
          The recent wave of web accessibility lawsuits and scandals have put
          organizations in reputation management crises and hefty legal
          expenses. We have the process in place to help protecting your
          branding and recovering from any negative social wave.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3" className={classes.service}>
          Influencer Marketing
        </Typography>
        <Typography>
          Connecting your business with targeted audiences can be a waste of
          investment. We can connect you with the right people that influence
          your audience on a daily-basis, effectively conveying the values of
          your brand.
        </Typography>
      </Grid>
    </Grid>
  )

  var posts = data.allWordpressPost.nodes
  var sections = posts.map((post, index) => {
    return (
      <Section color={index % 2 === 0 ? 'light' : 'dark'}>
        <div
          className={classes.section}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        {post.title.includes('Our Services') && services}
      </Section>
    )
  })

  function handleScroll() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.getElementById('appbar').style.top = '0'
    } else {
      document.getElementById('appbar').style.top = '-96px'
    }
  }

  if (typeof window !== 'undefined') {
    window.onscroll = handleScroll
  }

  var titleeSize = 'h1'
  var taglineSize = 'h2'
  if (smallScreen) {
    titleeSize = 'h2'
    taglineSize = 'h3'
  }

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Grid container direction="column">
          <Grid
            item
            container
            className={classes.logoContainer}
            alignItems="center"
            direction="column"
            onScroll={() => console.log('onScroll triggered!')}
          >
            <Typography
              className={classes.tagline}
              variant={titleeSize}
              component="h1"
            >
              Cross.Team
            </Typography>
            <img className={classes.logo} src={Logo} alt="cross.team logo" />
            <Typography
              className={classes.tagline}
              variant={taglineSize}
              component="h2"
            >
              Designing solutions with accessibility in mind
            </Typography>
          </Grid>
          {sections}
        </Grid>
      </Layout>
    </>
  )
}

export default Index
