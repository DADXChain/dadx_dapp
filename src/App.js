import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link,
  Switch,
  Redirect
} from 'react-router-dom'

import CSSTransitionGroup from 'react-addons-css-transition-group'
import MainSidebarPanel from './panels/MainSidebarPanel'
import MainPanel from './panels/MainPanel'

class App extends Component {
  appendScript (script) {
    const s = document.createElement('script')
    // s.type = 'text/javascript'
    // s.async = true
    s.src = script
    this.instance.appendChild(s)
  }

  componentDidMount () {
    this.appendScript('vendor/jquery/jquery.min.js')
    this.appendScript('vendor/bootstrap/js/bootstrap.bundle.min.js')
    this.appendScript('vendor/jquery-easing/jquery.easing.min.js')
    this.appendScript('vendor/datatables/jquery.dataTables.js')
    this.appendScript('vendor/datatables/dataTables.bootstrap4.js')
    this.appendScript('js/sb-admin.js')
    this.appendScript('js/sb-admin-charts.js')
    this.appendScript('js/sb-admin-datatables.min.js')
  }

  render () {
    return (
      <Router>
        <Route render={({ location }) => (
          <div>
            <MainSidebarPanel Link={Link} />
            <div className="content-wrapper" ref={el => (this.instance = el)}>
              <MainPanel
                Route={Route}
                CSSTransitionGroup={CSSTransitionGroup}
                Switch={Switch}
                Redirect={Redirect}
                location={location}
                Link={Link} />
              <footer className="sticky-footer">
                <div className="container">
                  <div className="text-center">
                    <small>Copyright © DADX Chain Team 2018</small>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        )} />
      </Router>
    )
  }
}

export default App


// <script src="vendor/jquery/jquery.min.js"></script>
// <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
// <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
// <script src="vendor/chart.js/Chart.min.js"></script>
// <script src="vendor/datatables/jquery.dataTables.js"></script>
// <script src="vendor/datatables/dataTables.bootstrap4.js"></script>
// <script src="js/sb-admin.min.js"></script>
// <script src="js/sb-admin-datatables.min.js"></script>
// <script src="js/sb-admin-charts.min.js"></script>