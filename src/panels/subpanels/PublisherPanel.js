import React, { Component } from 'react'
class PublisherPanel extends Component {
  constructor (props) {
    super()
  }
  render () {
    return (
        <div className="card card-register mx-auto mt-5">
        <div className="card-header"> Create AD Channel Smart Contract</div>
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
              <label for="exampleInputEmail1">Website</label>
              <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="link"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Channel Abstract</label>
              <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="abstract"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Type</label>
              <input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="type"/>
            </div>
            <a className="btn btn-primary btn-block" href="/next_step">Next -></a>
          </form>
        </div>
      </div>
    )
  }
}
export default PublisherPanel
