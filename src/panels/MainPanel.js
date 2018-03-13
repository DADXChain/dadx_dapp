import React from 'react'
import PropTypes from 'prop-types'

import DashboardPanel from './subpanels/DashboardPanel'
import TradePanel from './subpanels/TradePanel'
import PublisherPanel from './subpanels/PublisherPanel'
import AdvertiserPanel from './subpanels/AdvertiserPanel'

function MainPanel (props) {
  const Route = props.Route
  const Switch = props.Switch
  const Redirect = props.Redirect
  const CSSTransitionGroup = props.CSSTransitionGroup
  const location = props.location
  const key = location.pathname

  return (
    <div className='ui grid'>


      <CSSTransitionGroup
        transitionName='MainContainerFade'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>

        <Route location={location} key={key} >
          <Switch>
            <Redirect path='/' to='/dashboard' exact />
            <Route path='/dashboard' exact component={DashboardPanel} />
            <Route path='/trade' exact component={TradePanel} />
            <Route path='/publisher' exact component={PublisherPanel} />
            <Route path='/advertiser' exact component={AdvertiserPanel} />

          </Switch>
        </Route>
      </CSSTransitionGroup>

    </div>
  )
}

MainPanel.propTypes = {
  location: PropTypes.object
}

export default MainPanel
