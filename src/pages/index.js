import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { graphql } from 'gatsby'

import SEO from 'components/SEO/SEO'
import Layout from 'components/layout/layout'
import Section from 'components/section/section'
import Logo from 'assets/svgs/cross-team-light.svg'
import HeaderContext from 'providers/header-context'

var useStyles = makeStyles(theme => ({
  logoContainer: {
    marginBottom: theme.spacing(16),
  },
  logo: {
    width: '40%',
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

export default function Index({ data }) {
  var classes = useStyles()
  var headerContext = React.useContext(HeaderContext)
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
  console.log(posts)
  var sections = posts.map((post, index) => (
    <Section heading={post.title} color={index % 2 === 0 ? 'dark' : 'light'}>
      <Typography dangerouslySetInnerHTML={{ __html: post.content }} />
    </Section>
  ))

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
            <Typography className={classes.tagline} variant="h1">
              Tagline here
            </Typography>
          </Grid>
          {sections}
        </Grid>
      </Layout>
    </>
  )
}
