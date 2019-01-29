import Button from '../../Common/UI/CustomButtons/Button.js'
import Card from '../../Common/UI/Card/Card.js'
import GridContainer from '../../Common/UI/Grid/GridContainer.js'
import GridItem from '../../Common/UI/Grid/GridItem.js'
import Group from '@material-ui/icons/Group'
import InfoArea from '../../Common/UI/InfoArea/InfoArea.js'
import Notifications from '@material-ui/icons/NotificationsActive'
import PropTypes from 'prop-types'
import React from 'react'
import homeCardStyle from '../../../assets/jss/dashboard/views/homeCardStyle'
import withStyles from '@material-ui/core/styles/withStyles'

class HomeCard extends React.Component {
  render() {
    const { classes, onClick } = this.props
    const demoAddress = process.env.REACT_APP_DEMO_ADDRESS
    let demoBtnDisabled = typeof demoAddress === 'undefined' || demoAddress.length === 0
    if (!demoBtnDisabled && demoAddress) {
      demoAddress.split(',').forEach(element => {
        /** Checks if the address length is ok **/
        demoBtnDisabled = !(element.length % 42 === 0)
      })
    }

    const proactiveAlertDescription = (
      <>
        <p>
          As a <strong>Token Holder</strong> get to know how your LPTs are performing based on the
          token inflation and whether your delegate is calling the reward (you earn) or not (you
          loose)
        </p>
        <p>
          As a <strong>Transcoder</strong> be notified if there was something wrong with your node
          and the reward was not called in the current round automatically.
        </p>
      </>
    )

    const youAndLivepeerDescription = (
      <>
        <p>
          A Dashboard that provides an at-a-glance view of your participation in the network and
          receive tips on how to improve your earnings.
        </p>
      </>
    )

    return (
      <GridContainer className={classes.gridContainer} justify="center" alignItems="center">
        <GridItem className={classes.cardContainer}>
          <Card className={classes.cardSignup}>
            <h2 className={classes.cardTitle}>Tools for the Livepeer Network</h2>
            <InfoArea
              description={proactiveAlertDescription}
              icon={Notifications}
              iconColor="rose"
              title="Pro-active alert notifications"
            />
            <InfoArea
              description={youAndLivepeerDescription}
              icon={Group}
              iconColor="info"
              title="You and Livepeer"
            />
            <Button onClick={onClick} round color="primary" size="lg">
              Get started
            </Button>
            {/*            <Button round color="info" size="lg" onClick={onDemoClick} disabled={demoBtnDisabled}>
              Demo
            </Button>*/}
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

HomeCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(homeCardStyle)(HomeCard)
