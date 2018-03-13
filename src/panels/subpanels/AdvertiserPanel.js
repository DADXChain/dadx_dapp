import React, { Component } from 'react'
class AdvertiserPanel extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (

      <div className="card card-register mx-auto mt-5">
        <div className="card-header"> Create Advertise Request Smart Contract</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                  <label for="exampleInputName">Length</label>
                  <input className="form-control" id="exampleInputName" type="text" aria-describedby="nameHelp" placeholder="300px"/>
                </div>
                <div className="col-md-6">
                  <label for="exampleInputLastName">Width</label>
                  <input className="form-control" id="exampleInputLastName" type="text" aria-describedby="nameHelp" placeholder="260px"/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="name"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Type</label>
              <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="type"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">IPFS</label>
              <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="address"/>
            </div>
            <a className="btn btn-primary btn-block" href="/next_step">Next -></a>
          </form>
        </div>
      </div>
      
    )
  }
}

export default AdvertiserPanel
