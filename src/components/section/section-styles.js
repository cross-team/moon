import { makeStyles } from '@material-ui/core/styles'
import { hexToRgbA } from 'utils/functions'

var useStyles = makeStyles(theme => ({
  root: props => {
    let styles = {
      height: props.height,
      width: '100%',
      textAlign: 'center',
      borderRadius: '0px',
      color: theme.palette.components[props.color].textColor,
      backgroundColor: theme.palette.components[props.color].bgColor,
    }
    if (props.bgImg) {
      styles = {
        ...styles,
        backgroundImage: `url(${props.bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: `${hexToRgbA(
          theme.palette.components[props.color].bgColor,
          '.5'
        )} 0 0 0 1000px inset`,
      }
    }
    return styles
  },
  content: {
    width: '84%',
    margin: 'auto',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  skipLinkContainer: {
    alignSelf: 'flex-end',
  },
  skipLink: props => ({
    color: theme.palette.components[props.color].linkColor,
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.components[props.color].linkColor,
      color: theme.palette.components[props.color].bgColor,
    },
    '&:focus': {
      backgroundColor: theme.palette.components[props.color].linkColor,
      color: theme.palette.components[props.color].bgColor,
    },
  }),
  playerContainer: {
    width: '80%',
    overflow: 'hidden',
    height: '0',
    // paddingTop is 80% (width) of the aspect ratio (56.25%) of a typical video
    paddingTop: '45% !important',
    position: 'relative',
  },
  player: {
    position: 'absolute',
    top: '0',
    left: '0',
  },
  transcript: {
    margin: theme.spacing(4),
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(4),
  },
  children: props => ({
    textAlign: 'left',
    '& a': {
      color: theme.palette.components[props.color].linkColor,
      padding: '0 4px',
      '&:hover': {
        backgroundColor: theme.palette.components[props.color].linkColor,
        color: theme.palette.components[props.color].bgColor,
      },
      '&:focus': {
        backgroundColor: theme.palette.components[props.color].linkColor,
        color: theme.palette.components[props.color].bgColor,
      },
    },
  }),
}))

export default useStyles
