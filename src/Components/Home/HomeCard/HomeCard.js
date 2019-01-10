import React from 'react'
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import Code from '@material-ui/icons/Code'
import Group from '@material-ui/icons/Group'
import Notifications from '@material-ui/icons/NotificationsActive'
// core components
import GridContainer from '../../Common/UI/Grid/GridContainer.js'
import GridItem from '../../Common/UI/Grid/GridItem.js'
import Button from '../../Common/UI/CustomButtons/Button.js'
import InfoArea from '../../Common/UI/InfoArea/InfoArea.js'
import Card from '../../Common/UI/Card/Card.js'

import homeCardStyle from '../../../assets/jss/dashboard/views/homeCardStyle'

class HomeCard extends React.Component {
  render() {
    const { classes, onClick } = this.props
    return (
      <GridContainer className={classes.gridContainer} justify="center" alignItems="center">
        <GridItem className={classes.cardContainer}>
          <Card className={classes.cardSignup}>
            <h2 className={classes.cardTitle}>Livepeer Notifications</h2>

            <InfoArea
              description="We provide pro-active alert notifications that will help LPT token holders to be updated about how the transcoders are performing in near real time"
              icon={Notifications}
              iconColor="rose"
              title="Pro-active alert notifications"
            />
            <InfoArea
              description="You can see also a summary of your account information and your livepeer balance"
              icon={Group}
              iconColor="info"
              title="Account information summary"
            />
            <InfoArea
              description=""
              icon={Code}
              iconColor="primary"
              noCentered={true}
              title="Open source"
            />
            <Button onClick={onClick} round color="primary" size="lg">
              Get started
            </Button>
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