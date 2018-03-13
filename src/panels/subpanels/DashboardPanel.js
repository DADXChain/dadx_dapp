import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import PublisherApplicationForm from '../../components/PublisherApplicationForm'
// import PublisherApplicationInfo from '../../components/PublisherApplicationInfo'
// import RegistryStatsbar from '../../components/RegistryStatsbar'

class DashboardPanel extends Component {
  constructor (props) {
    super()

    this.history = props.history
  }

  componentDidMount () {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://files.coinmarketcap.com/static/widget/currency.js'
    this.instance.appendChild(s)
  }

  render () {
    return (

      <div className='container-fluid'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <a href='#'>Dashboard</a>
          </li>
          <li className='breadcrumb-item active'>My Dashboard</li>
        </ol>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='card mb-3'>
              <div className='card-header'>
                <i className='fa fa-bar-chart'></i> Status </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm-8 my-auto'>
                    <canvas id='myBarChart' width='100' height='50'></canvas>
                  </div>
                  <div className='col-sm-4 text-center my-auto'>
                    <div className='h4 mb-0 text-primary'>27</div>
                    <div className='small text-muted'>Total Channel</div>
                    <hr/>
                    <div className='h4 mb-0 text-warning'>974 DADX</div>
                    <div className='small text-muted'>Average Price</div>
                    <hr/>
                    <div className='h4 mb-0 text-success'>6,219 DADX</div>
                    <div className='small text-muted'>Average Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card mb-3'>
              <div className='card-header'>
                <i className='fa fa-stack-exchange'></i> Current ETH </div>
              <div className='card-body'>
              <div className='coinmarketcap-currency-widget' 
                data-currencyid='1027' data-base='USD'  data-secondary='BTC' ref={el => (this.instance = el)}></div>
              </div>
            </div>
            <div className='card mb-3'>
              <div className='card-header'>
                <i className='fa fa-stack-exchange'></i> Current DADX </div>
              <div className='card-body'>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

// DashboardPanel.propTypes = {
//   history: PropTypes.object
// }

export default DashboardPanel
