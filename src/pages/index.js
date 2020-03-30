import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Section from '../components/section/section'

export var IMAGES_QUERY = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
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
  }
`

export default function Index({ data }) {
  var images = data.allFile.edges.map(edge => {
    console.log(edge)
    let srcArr = edge.node.childImageSharp.fluid.srcSet.split(',\n')
    let srcObj = srcArr.reduce(function reducer(srcSet, src) {
      let splitSrc = src.split(' ')
      return { ...srcSet, [splitSrc[1]]: splitSrc[0] }
    }, {})
    let image = {
      name: edge.node.childImageSharp.fluid.originalName,
      originalImg: edge.node.childImageSharp.fluid.originalImg,
      src: edge.node.childImageSharp.fluid.src,
      srcSet: srcObj,
    }
    return image
  })

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
        Phasellus non feugiat lorem, id tempus nulla. Maecenas molestie magna
        enim, a gravida mauris ultricies porttitor. Phasellus tincidunt egestas
        tortor at congue. Sed suscipit lacus quis porta egestas. Donec ac
        consequat velit. Integer viverra turpis eget malesuada vulputate.
        Integer pellentesque suscipit arcu, sit amet scelerisque nibh venenatis
        in.
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
    <Layout title="cross.team - Home">
      <Grid container direction="column">
        <Grid item>
          <Section heading="Dark">
            <Typography>{lipsum}</Typography>
          </Section>
          <Section heading="Light" color="light">
            <Typography>{lipsum}</Typography>
          </Section>
          <Section heading="Blue" color="blue">
            <Typography>{lipsum}</Typography>
          </Section>
          <Section
            heading="Light with Image"
            color="light"
            img={images[1].srcSet['400w']}
          >
            <Typography>{lipsum}</Typography>
          </Section>
          <Section
            heading="Blue with Background Image"
            color="blue"
            bgImg={images[0].originalImg}
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
            bgImg={images[0].originalImg}
            videoURL="https://www.youtube.com/watch?v=20SHvU2PKsM"
          >
            <Typography>{lipsum}</Typography>
          </Section>
        </Grid>
      </Grid>
    </Layout>
  )
}
