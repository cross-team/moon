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
import ScrollArrow from 'components/scroll-arrow/scroll-arrow'

import MainContentContext from 'providers/main-content-context'
import { skipToMain } from 'utils/functions'

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
    width: props.smallScreen ? '72%' : '30%',
  }),
  section: {
    // textAlign: 'center',
  },
  services: {
    marginTop: theme.spacing(4),
  },
  brandLogo: props => {
    let logoWidth = '50%'
    // if (props.mediumScreen) logoWidth = '20%'
    // if (props.smallScreen) logoWidth = '36%'
    return {
      width: logoWidth,
      minHeight: '25vh',
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
  var { mainContentRef } = React.useContext(MainContentContext)
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

  var services = (
    <Grid container spacing={4} className={classes.services}>
      {servicesData.map((service, index) => (
        <Grid item xs={12} md={4} key={service.title}>
          <h3 aria-level="2">{service.title}</h3>
          <Typography>{service.content}</Typography>
        </Grid>
      ))}
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

    let images = logos.map(logo => (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        container
        justify="center"
        key={logo.alt}
      >
        <img className={classes.brandLogo} src={logo.src} alt={logo.alt} />
      </Grid>
    ))
    return (
      <Grid container alignItems="center">
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
      <Section color={sectionTheme} linkID={`skipLink${index}`} key={index}>
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
          >
            <img
              className={classes.logo}
              src={Logo}
              alt="The Cross.Team logo is illustrated as a Swiss Army knife, representing the effectiveness and agility of cross-functional teams."
            />
            <ScrollArrow onClick={() => skipToMain(mainContentRef)} />
          </Grid>
          {sections}
        </Grid>
      </Layout>
    </>
  )
}

export default Index
