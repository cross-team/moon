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

import thomsonDark from 'assets/svgs/dark/Thomson_Reuters.svg'
import franklinDark from 'assets/svgs/dark/franklin-templeton-investments.svg'
import safrapayDark from 'assets/svgs/dark/safrapay.svg'
import deustcheDark from 'assets/svgs/dark/Deutsche_Bank.svg'
import verizonDark from 'assets/svgs/dark/Verizon.svg'
import siemensDark from 'assets/svgs/dark/Siemens.svg'

import thomsonLight from 'assets/svgs/light/Thomson_Reuters.svg'
import franklinLight from 'assets/svgs/light/franklin-templeton-investments_white.svg'
import safrapayLight from 'assets/svgs/light/safrapay.svg'
import deustcheLight from 'assets/svgs/light/Deutsche_Bank.svg'
import verizonLight from 'assets/svgs/light/Verizon.svg'
import siemensLight from 'assets/svgs/light/Siemens.svg'

var useStyles = makeStyles(theme => ({
  logoContainer: {
    marginBottom: theme.spacing(16),
    height: 'calc(100vh - 124px)',
  },
  logo: props => ({
    width: props.smallScreen ? '80%' : '30%',
  }),
  section: {
    // textAlign: 'center',
  },
  services: {
    marginTop: theme.spacing(4),
  },
  brandLogo: props => {
    let logoWidth = '10%'
    if (props.mediumScreen) logoWidth = '20%'
    if (props.smallScreen) logoWidth = '36%'
    return {
      width: logoWidth,
    }
  },
  brandContainer: {
    minHeight: '30vw',
  },
}))

export var POSTS_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { tag: { eq: "home" } } }
      sort: { fields: frontmatter___title }
    ) {
      nodes {
        frontmatter {
          title
        }
        html
      }
    }
  }
`

function Index({ data }) {
  var theme = useTheme()
  var mediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  var smallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  var classes = useStyles({ mediumScreen, smallScreen })
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
        <Typography variant="h3">Accessibility</Typography>
        <Typography>
          As the world changes to adjust to COVID-19, more than ever before,
          businesses need clear Accessibility and Procurement policies in place.
          Our team of Accessibility experts can get your organization started
          with a proper and cost-effective Accessibility strategy.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3">Workshops</Typography>
        <Typography>
          Enterprise training approach combines in-person instruction and online
          learning with relevant content and an adaptive curriculum for User
          Experience Design practices and Digital Accessibility.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3">User Research</Typography>
        <Typography>
          We partner with a network of usability pool of participants covering
          any demographic and disability needs.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3">Discovery</Typography>
        <Typography>
          Dive into the idea, explore opportunities and assess the competitors
          through Design Thinking methodologies.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3">Design</Typography>
        <Typography>
          Experts in building a product visual language, design token
          architecture and complete Design Systems. Expertly crafted bespoke
          platforms built with Accessibility in mind from day-1 to scale and
          succeed.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3">Development</Typography>
        <Typography>
          Accessible front-end development ensures people with different
          abilities can access, understand, and navigate web content, regardless
          of how they’re accessing it. Our front-end developers collaborate with
          other members of a cross-functional team to implement a robust user
          experience.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3">Social Media</Typography>
        <Typography>
          Digital Marketing is also maturing to become responsibly inclusive.
          Our Social Media strategy is based on best practices to ensure that
          your online content is usable and accessible to all citizens,
          including those with disabilities.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3">Online Reputation</Typography>
        <Typography>
          The recent wave of web accessibility lawsuits and scandals have put
          organizations in reputation management crises and hefty legal
          expenses. We have the process in place to help protecting your
          branding and recovering from any negative social wave.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h3">Influencer Marketing</Typography>
        <Typography>
          Connecting your business with targeted audiences can be a waste of
          investment. We can connect you with the right people that influence
          your audience on a daily-basis, effectively conveying the values of
          your brand.
        </Typography>
      </Grid>
    </Grid>
  )

  var lightBrandLogos = [
    { src: thomsonLight, alt: 'Thomson Reuters' },
    { src: franklinLight, alt: 'Franklin Templeton Investments' },
    { src: safrapayLight, alt: 'Safrapay' },
    { src: deustcheLight, alt: 'Deutsche Bank' },
    { src: verizonLight, alt: 'Verizon' },
    { src: siemensLight, alt: 'Siemens' },
  ]
  var darkBrandLogos = [
    { src: thomsonDark, alt: 'Thomson Reuters' },
    { src: franklinDark, alt: 'Franklin Templeton Investments' },
    { src: safrapayDark, alt: 'Safrapay' },
    { src: deustcheDark, alt: 'Deutsche Bank' },
    { src: verizonDark, alt: 'Verizon' },
    { src: siemensDark, alt: 'Siemens' },
  ]

  function renderBrandLogos(theme) {
    let logos
    if (theme === 'light') {
      logos = darkBrandLogos
    } else if (theme === 'dark') {
      logos = lightBrandLogos
    } else {
      return null
    }

    if (smallScreen) {
      return (
        <>
          <Grid
            className={classes.brandContainer}
            container
            alignItems="center"
            justify="space-around"
          >
            {logos.slice(0, 2).map(logo => (
              <img
                className={classes.brandLogo}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </Grid>
          <Grid
            className={classes.brandContainer}
            container
            alignItems="center"
            justify="space-around"
          >
            {logos.slice(2, 4).map(logo => (
              <img
                className={classes.brandLogo}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </Grid>
          <Grid
            className={classes.brandContainer}
            container
            alignItems="center"
            justify="space-around"
          >
            {logos.slice(4, 6).map(logo => (
              <img
                className={classes.brandLogo}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </Grid>
          <Grid
            className={classes.brandContainer}
            container
            alignItems="center"
            justify="space-around"
          >
            {logos.slice(6, 8).map(logo => (
              <img
                className={classes.brandLogo}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </Grid>
        </>
      )
    }

    if (mediumScreen) {
      return (
        <>
          <Grid container alignItems="center" justify="space-around">
            {logos.slice(0, 4).map(logo => (
              <img
                className={classes.brandLogo}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </Grid>
          <Grid container alignItems="center" justify="space-around">
            {logos.slice(4, 8).map(logo => (
              <img
                className={classes.brandLogo}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </Grid>
        </>
      )
    }

    let images = logos.map(logo => (
      <img className={classes.brandLogo} src={logo.src} alt={logo.alt} />
    ))
    return (
      <Grid container alignItems="center" justify="space-around">
        {images}
      </Grid>
    )
  }

  var nodes = data.allMarkdownRemark.nodes
  var sections = nodes.map((node, index) => {
    let sectionTheme = ''
    if (index % 2 === 0) {
      sectionTheme = 'light'
    } else {
      sectionTheme = 'dark'
    }
    return (
      <Section color={sectionTheme}>
        <div
          className={classes.section}
          dangerouslySetInnerHTML={{ __html: node.html }}
        />
        {node.frontmatter.title.includes('Our Services') && services}
        {node.frontmatter.title.includes('brands') &&
          renderBrandLogos(sectionTheme)}
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

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Grid container direction="column">
          <Grid
            item
            container
            className={classes.logoContainer}
            justify="center"
            alignItems="center"
            direction="column"
            onScroll={() => console.log('onScroll triggered!')}
          >
            <img
              className={classes.logo}
              src={Logo}
              alt="The Cross.Team logo is illustrated as a Swiss Army knife, representing the effectiveness and agility of cross-functional teams."
            />
          </Grid>
          {sections}
        </Grid>
      </Layout>
    </>
  )
}

export default Index
