import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import thomsonDark from 'assets/svgs/dark/Thomson_Reuters.svg'
import franklinDark from 'assets/svgs/dark/franklin-templeton-investments.svg'
import safrapayDark from 'assets/svgs/dark/safrapay.svg'
import deustcheDark from 'assets/svgs/dark/Deutsche_Bank.svg'
import verizonDark from 'assets/svgs/dark/Verizon.svg'
import siemensDark from 'assets/svgs/dark/Siemens.svg'

import thomsonLight from 'assets/svgs/light/Thomson_Reuters.svg'
import franklinLight from 'assets/svgs/light/franklin-templeton-investments_white.svg'
import safrapayLight from 'assets/svgs/light/safrapay.svg'
import deustcheLight from 'assets/svgs/light/Deutsche_Bank.svg'
import verizonLight from 'assets/svgs/light/Verizon.svg'
import siemensLight from 'assets/svgs/light/Siemens.svg'

var useStyles = makeStyles(theme => ({
  brandLogo: props => {
    let logoWidth = '50%'
    return {
      width: logoWidth,
      minHeight: '25vh',
    }
  },
}))

var lightBrandLogos = [
  { src: thomsonLight, alt: 'Thomson Reuters' },
  { src: franklinLight, alt: 'Franklin Templeton Investments' },
  { src: safrapayLight, alt: 'Safrapay' },
  { src: deustcheLight, alt: 'Deutsche Bank' },
  { src: verizonLight, alt: 'Verizon' },
  { src: siemensLight, alt: 'Siemens' },
]
var darkBrandLogos = [
  { src: thomsonDark, alt: 'Thomson Reuters' },
  { src: franklinDark, alt: 'Franklin Templeton Investments' },
  { src: safrapayDark, alt: 'Safrapay' },
  { src: deustcheDark, alt: 'Deutsche Bank' },
  { src: verizonDark, alt: 'Verizon' },
  { src: siemensDark, alt: 'Siemens' },
]

function Clients({ sectionTheme }) {
  var classes = useStyles()

  var logos
  if (sectionTheme === 'dark') {
    logos = lightBrandLogos
  } else {
    logos = darkBrandLogos
  }

  var images = logos.map(logo => (
    <Grid item xs={12} sm={6} md={4} container justify="center" key={logo.alt}>
      <img className={classes.brandLogo} src={logo.src} alt={logo.alt} />
    </Grid>
  ))

  return (
    <Grid container alignItems="center">
      {images}
    </Grid>
  )
}

export default Clients
