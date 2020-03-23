import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

var useStyles = makeStyles(theme => ({
  panel: {
    width: '100%',
    border: '2px solid',
    borderColor: theme.palette.primary.main,
  },
  panelTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  panelIcon: {
    color: theme.palette.primary.main,
  },
}))

export default function Panel({ children, title }) {
  var classes = useStyles()

  return (
    <ExpansionPanel className={classes.panel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon className={classes.panelIcon} />}
        aria-label={`Panel Title: ${title}`}
        aria-controls={`${title}-panel-content`}
      >
        <Typography className={classes.panelTitle}>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails id={`${title}-panel-content`}>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
