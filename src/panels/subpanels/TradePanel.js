import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class TradePanel extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (

      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-header">
            <i className="fa fa-table"></i>Trade</div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>IPFS</th>
                    <th>Status</th>
                    <th>Cost/Receive</th>
                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default TradePanel
