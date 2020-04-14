import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { graphql } from 'gatsby'

import SEO from 'components/SEO/SEO'
import Layout from 'components/layout/layout'
import Section from 'components/section/section'
import LinkCard from 'components/link-card/link-card'

export var IMAGES_QUERY = graphql`
  query {
    mountain: allFile(filter: { name: { eq: "mountain" } }) {
      nodes {
        childImageSharp {
          fluid {
            originalName
            originalImg
            src
            srcSet
          }
        }
      }
    }
    tools: allFile(filter: { name: { eq: "tools" } }) {
      nodes {
        childImageSharp {
          fluid {
            originalName
            originalImg
            src
            srcSet
          }
        }
      }
    }
  }
`

export default function Index({ data }) {
  var images = Object.keys(data).reduce(function dataReducer(imageSet, key) {
    let image = data[key].nodes[0].childImageSharp.fluid
    let srcArr = image.srcSet.split(',\n')
    let srcObj = srcArr.reduce(function srcReducer(srcSet, src) {
      let splitSrc = src.split(' ')
      return { ...srcSet, [splitSrc[1]]: splitSrc[0] }
    }, {})
    let result = {
      name: image.originalName,
      originalImg: image.originalImg,
      src: image.src,
      srcSet: srcObj,
    }
    return { ...imageSet, [key]: result }
  }, {})

  console.log(images)

  var lipsum = (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu lacus
        eu enim condimentum molestie. Maecenas cursus a sapien quis dapibus.
        Vestibulum tincidunt eleifend varius. Etiam vel placerat eros. Aenean
        elementum, lacus at consectetur tincidunt, augue turpis suscipit ipsum,
        eu fermentum sem urna sed elit. Donec viverra, neque sit amet malesuada
        fermentum, ipsum lacus vulputate ipsum, tristique blandit lacus neque
        sit amet nibh. Etiam vel luctus nisi. Donec et efficitur libero. Sed in
        lacus non nibh ornare laoreet quis id est. Aenean placerat scelerisque
        eleifend. Mauris gravida est diam, a laoreet eros vestibulum ac.
        Vestibulum ut cursus dui. Quisque eget consequat tellus. Duis orci
        libero, euismod sit amet justo nec, ultrices aliquet quam.
      </p>
      <p>
        Fusce blandit nisi justo, eu varius tortor feugiat ac. Praesent sit amet
        interdum nunc. Morbi sit amet egestas lacus, ac ultrices justo.
        Pellentesque pharetra, dolor vitae suscipit pharetra, mauris eros
        facilisis magna, non fermentum ipsum elit quis lorem. Duis vitae eros
        gravida, hendrerit felis sed, euismod enim. Nam sed dui leo. Mauris
        ultrices pharetra orci quis vulputate. Integer dui orci, ornare vitae
        efficitur eu, pharetra et tortor. Vestibulum a lacinia arcu. Aenean eget
        semper metus.
      </p>
    </>
  )

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Grid container direction="column">
          <Grid item>
            <Section heading="The best products start with cross.team">
              <Typography>
                Create, prototype, collaborate and turn your ideas into
                incredible products with the definitive platform for digital
                design.
              </Typography>
            </Section>
            <Section
              heading="A native Mac app, built for designers like you"
              color="light"
            >
              <Typography>
                Create your best work with essential tools that speed up your
                workflow and game-changing features that take your designs to
                the next level.
              </Typography>
            </Section>
            <Section heading="Blog Posts or Case Studies" color="blue">
              <Grid container alignItems="center" justify="center" spacing={4}>
                <Grid item xs={12} md={4}>
                  <LinkCard
                    image={images.tools.src}
                    tags={['Beta']}
                    title="Cloud Inspector"
                    content={
                      <p>
                        Move from design to development in just a few clicks.
                        Inspect elements, copy attributes and measure between
                        layers, right in the browser. Developer Handoff is here
                        — and for developers, it's free.
                      </p>
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <LinkCard
                    image={images.tools.src}
                    tags={['New']}
                    title="Smart Layout gets smarter"
                    content={
                      <p>
                        Create responsive, reusable components that
                        automatically resize to fit their content. And now — get
                        even more control with the option to set minimum
                        dimensions for Smart Layout Symbols.
                      </p>
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <LinkCard
                    image={images.tools.src}
                    tags={['Free Trial', 'services']}
                    title="Try out Sketch for Teams"
                    content={
                      <p>
                        Share prototypes, provide feedback and collaborate in a
                        single shared workspace. Get powerful team management,
                        Mac App access unlimited storage for a single, simple
                        price.
                      </p>
                    }
                  />
                </Grid>
              </Grid>
            </Section>
            <Section
              heading="Light with Image"
              color="light"
              img={images.tools.srcSet['400w']}
            >
              <Typography>{lipsum}</Typography>
            </Section>
            <Section
              heading="Blue with Background Image"
              color="blue"
              bgImg={images.mountain.originalImg}
            >
              <Typography>{lipsum}</Typography>
            </Section>
            <Section
              heading="Video"
              videoURL="https://www.youtube.com/watch?v=20SHvU2PKsM"
            >
              <Typography>{lipsum}</Typography>
            </Section>
            <Section
              heading="Video & Background Image"
              bgImg={images.mountain.originalImg}
              videoURL="https://www.youtube.com/watch?v=20SHvU2PKsM"
            >
              <Typography>{lipsum}</Typography>
            </Section>
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}
