import React from 'react'

function Header({ ...props }) {
  const { classes } = props

  return (
    <header>
      {/* <GridContainer container={true} justify="space-between">
        <GridItem
          alignItems="center"
          className={`${classes.responsiveFooterElements} ${classes.responsiveFooterElementsLeft}`}
          container={true}
          md={6}
          sm={6}
          xs={12}
        />
        <GridItem
          alignItems="center"
          className={`${classes.responsiveFooterElements} ${classes.responsiveFooterElementsRight}`}
          container={true}
          md={6}
          sm={6}
          xs={12}
        >
          <p>
            {1900 + new Date().getYear()}{' '}
            <a href="https://www.protofire.io" className={`${anchor} ${classes.a}`}>
              Protofire.io.
            </a>{' '}
            <a
              href="https://github.com/protofire/livepeer-alerts-frontend"
              className={`${anchor} ${classes.a}`}
            >
              <i className="fab fa-github" />{' '}
            </a>
            <a
              href="https://github.com/protofire/livepeer-alerts-frontend/issues/new"
              className={`${anchor} ${classes.a}`}
            >
              Report a bug
            </a>
          </p>
        </GridItem>
      </GridContainer> */}
    </header>
  )
}

export default Header
