import React, { useState, useRef, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import ReactPlayer from 'react-player'
import useStyles from './section-styles'

export default function Section({
  children,
  color = 'dark',
  heading = '',
  bgImg = '',
  bgImgAlt = 'Image Needs Proper Alt Text',
  img = '',
  imgAlt = 'Image Needs Proper Alt Text',
  videoURL = '',
  transcript = 'Video Needs Proper Transcript',
}) {
  var classes = useStyles({ color, bgImg })
  var [transcriptOn, setTranscriptOn] = useState(false)
  var transcriptRef = useRef(null)

  useEffect(() => {
    if (transcriptOn) transcriptRef.current.focus()
  }, [transcriptOn])

  function handleTranscript() {
    setTranscriptOn(!transcriptOn)
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
        <a
          href="#skipToMain"
          data-testid="skipLink"
          className={classes.skipLink}
        >
          <Typography>Skip to Navigation</Typography>
        </a>
        <Typography className={classes.heading} variant="h1">
          {heading}
        </Typography>
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
          <Grid item xs={12} lg={videoURL || img ? 6 : 12}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
