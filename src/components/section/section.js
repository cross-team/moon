import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import ReactPlayer from 'react-player'
import useStyles from './section-styles'

import './section.css'

import RefsContext from 'providers/refs-context'

function Section({
  children,
  color = 'dark',
  heading = '',
  bgImg = '',
  bgImgAlt = 'Image Needs Proper Alt Text',
  img = '',
  imgAlt = 'Image Needs Proper Alt Text',
  videoURL = '',
  transcript = 'Video Needs Proper Transcript',
  linkID = '',
  height,
}) {
  var { mainContentRef, skipToMainRef } = React.useContext(RefsContext)
  var classes = useStyles({ color, bgImg, height })
  var theme = useTheme()
  var smallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  var mediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  var [transcriptOn, setTranscriptOn] = useState(false)
  var transcriptRef = useRef(null)

  var headingSize = 'h1'
  if (smallScreen) {
    headingSize = 'h3'
  } else if (mediumScreen) {
    headingSize = 'h2'
  }

  useEffect(() => {
    if (transcriptOn) transcriptRef.current.focus()
  }, [transcriptOn])

  function handleTranscript() {
    setTranscriptOn(!transcriptOn)
  }

  function handleSkipToNav() {
    skipToMainRef.current.focus()
    window.scrollTo(0, 0)
  }

  return (
    <div className={classes.root} aria-label={bgImg && bgImgAlt}>
      <Grid
        className={classes.content}
        container
        direction="column"
        alignItems="center"
        wrap="nowrap"
        justify="center"
      >
        <Typography className={classes.skipLinkContainer}>
          <a
            className={classes.skipLink}
            href="#"
            data-testid="skipLink"
            id={linkID}
            onClick={handleSkipToNav}
          >
            Skip to Navigation
          </a>
        </Typography>

        {heading && (
          <Typography
            className={classes.heading}
            variant={headingSize}
            component="h2"
          >
            {heading}
          </Typography>
        )}
        <Grid container justify="center" item spacing={8}>
          {(videoURL || img) && (
            <Grid
              item
              xs={12}
              lg={6}
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              {img && <img src={img} alt={imgAlt} />}
              {videoURL && (
                <>
                  <div className={classes.playerContainer}>
                    <ReactPlayer
                      className={classes.player}
                      url={videoURL}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <Collapse className={classes.transcript} in={transcriptOn}>
                    <Typography ref={transcriptRef} tabIndex="-1">
                      {transcript}
                    </Typography>
                  </Collapse>
                  <Button variant="contained" onClick={handleTranscript}>
                    {transcriptOn ? 'Hide Transcript' : 'Show Transcript'}
                  </Button>
                </>
              )}
            </Grid>
          )}
          <Grid
            className={`${classes.children} section-children`}
            item
            xs={12}
            lg={videoURL || img ? 6 : 12}
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Section
