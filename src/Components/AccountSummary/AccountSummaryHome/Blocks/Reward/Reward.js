import React from 'react'
import RewardDescriptionDelegator from './RewardDescriptionDelegator'
import GridItem from '../../../../Common/UI/Grid/GridItem.js'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from '../../../../Common/UI/CustomButtons/Button'
import RewardDescriptionDelegate from './RewardDescriptionDelegate'
import { TELEGRAM_URL } from '../../../../../common/constants'

const Reward = props => {
  const { classes, userData, summary } = props
  const { isSubscribed, address } = userData
  const { status } = summary

  let statusCheck = status.toUpperCase()
  let disableOrHide = !['REGISTERED', 'BONDED', 'UNBONDING', 'UNBONDED'].includes(statusCheck)

  let subscriptionBtn
  if (isSubscribed) {
    subscriptionBtn = (
      <Button
        className={classes.subscriptionBtn}
        color="warning"
        disabled={disableOrHide}
        onClick={props.onUnSubscribeBtnHandler}
        round
        size="lg"
      >
        <i className="fas fa-envelope" />
        Unsubscribe
      </Button>
    )
  } else {
    subscriptionBtn = (
      <Button
        className={classes.subscriptionBtn}
        color="primary"
        disabled={disableOrHide}
        onClick={props.onSubscribeBtnHandler}
        round
        size="lg"
      >
        <i className="fas fa-envelope" />
        Email
      </Button>
    )
  }

  const telegramLink = `${TELEGRAM_URL}?start=${address}`
  const openTelegramLink = () => {
    window.open(telegramLink, '_blank')
  }

  let rewardDescription = <RewardDescriptionDelegator {...props} />
  /** If the user is a delegate we show the delegate component, otherwise we show the delegator component **/
  if (props.summary && props.summary.role && props.summary.role.toLowerCase() === 'transcoder') {
    rewardDescription = <RewardDescriptionDelegate {...props} />
  }

  return (
    <>
      <GridItem className={classes.itemsContainerFull} lg={12} md={12} xs={12}>
        {rewardDescription}
      </GridItem>
      {disableOrHide ? null : (
        <>
          <GridItem className={classes.buttonsContainer} lg={12} md={12} xs={12}>
            <CopyToClipboard text={telegramLink}>
              <Button
                className={classes.subscriptionBtn}
                onClick={openTelegramLink}
                disabled={disableOrHide}
                color="twitter"
                round
                size="lg"
              >
                <i className="fab fa-telegram-plane" />
                Telegram
              </Button>
            </CopyToClipboard>
            {subscriptionBtn}
          </GridItem>
          <GridItem className={classes.itemsContainerFull} lg={12} md={12} xs={12}>
            <p className={classes.subscribeText}>
              Don't miss your
              <a
                href="https://forum.livepeer.org/t/why-you-should-bond-your-new-livepeer-tokens-lpt-detailed-version/418"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                LPT reward.{' '}
              </a>
              Subscribe now!
            </p>
          </GridItem>
        </>
      )}
    </>
  )
}

export default Reward
