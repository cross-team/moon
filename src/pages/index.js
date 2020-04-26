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
}))

export var POSTS_QUERY = graphql`
  query {
    allWordpressPost(sort: { fields: tags___name, order: ASC }) {
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

  var posts = data.allWordpressPost.nodes
  var sections = posts.map((post, index) => (
    <Section heading={post.title} color={index % 2 === 0 ? 'dark' : 'light'}>
      <Typography dangerouslySetInnerHTML={{ __html: post.content }} />
    </Section>
  ))

  function handleScroll() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.getElementById('appbar').style.top = '0'
    } else {
      document.getElementById('appbar').style.top = '-80px'
    }
  }

  if (typeof window !== 'undefined') {
    window.onscroll = handleScroll
  }

  var taglineSize = 'h1'
  if (useMediaQuery(theme.breakpoints.up('sm'))) {
    taglineSize = 'h2'
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
            <img className={classes.logo} src={Logo} alt="cross.team logo" />
            <Typography
              className={classes.tagline}
              variant={taglineSize}
              component="h1"
            >
              Tagline here
            </Typography>
          </Grid>
          {sections}
        </Grid>
      </Layout>
    </>
  )
}

export default Index
