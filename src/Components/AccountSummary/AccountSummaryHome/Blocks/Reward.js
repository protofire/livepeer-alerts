import React from 'react'
import RewardDescription from './RewardDescription'
import GridItem from '../../../Common/UI/Grid/GridItem.js'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from '../../../Common/UI/CustomButtons/Button'

const Reward = props => {
  const { classes, userData, summary } = props
  const { isSubscribed, address } = userData
  const { status } = summary
  const disableOrHide = status !== 'Bonded'

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

  const telegramLink = `${process.env.REACT_APP_LIVEPEER_TELEGRAM_BOT_URL}?start=${address}`
  const openTelegramLink = () => {
    window.open(telegramLink, '_blank')
  }

  return (
    <>
      <GridItem className={classes.itemsContainerFull} lg={12} md={12} xs={12}>
        <RewardDescription {...props} />
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
