import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { graphql } from 'gatsby'

import SEO from 'components/SEO/SEO'
import Layout from 'components/layout/layout'
import Section from 'components/section/section'
import LinkCard from 'components/link-card/link-card'

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
          {sections}
        </Grid>
      </Layout>
    </>
  )
}
