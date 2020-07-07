import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import { graphql } from 'gatsby'

import Layout from 'components/layout/layout'
import Section from 'components/section/section'
import ScrollArrow from 'components/scroll-arrow/scroll-arrow'
import Clients from 'components/clients/clients'
import Services from 'components/services/services'

import RefsContext from 'providers/refs-context'
import { skipToMain } from 'utils/functions'
import Logo from 'assets/svgs/cross-team-light.svg'

var useStyles = makeStyles(theme => ({
  logoContainer: {
    marginBottom: theme.spacing(16),
    height: 'calc(100vh - 124px)',
  },
  logo: props => ({
    width: props.smallScreen ? '64%' : '30%',
  }),
}))

export var POSTS_QUERY = graphql`
  query {
    github {
      repository(name: "moon", owner: "cross-team") {
        issues(first: 10, filterBy: { labels: "home" }) {
          nodes {
            title
            bodyHTML
          }
        }
      }
    }
  }
`

function Index({ data }) {
  var theme = useTheme()
  var { mainContentRef } = React.useContext(RefsContext)
  var smallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  var classes = useStyles({ smallScreen })

  function compareTitles(a, b) {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    // a must be equal to b
    return 0
  }

  var nodes = data.github.repository.issues.nodes
  var sortedNodes = nodes.sort(compareTitles)
  var sections = sortedNodes.map((node, index) => {
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
          dangerouslySetInnerHTML={{ __html: node.bodyHTML }}
        />
        {node.title.includes('Our Services') && <Services />}
        {node.title.includes('brands') && (
          <Clients sectionTheme={sectionTheme} />
        )}
      </Section>
    )
  })

  var landing = (
    <Grid
      item
      container
      className={classes.logoContainer}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <img
        className={classes.logo}
        src={Logo}
        alt="The Cross.Team logo is illustrated as a Swiss Army knife, representing the effectiveness and agility of cross-functional teams."
      />
      <ScrollArrow onClick={() => skipToMain(mainContentRef)} />
    </Grid>
  )

  return (
    <>
      <Layout landing={landing} title="Home">
        {sections}
      </Layout>
    </>
  )
}

export default Index
