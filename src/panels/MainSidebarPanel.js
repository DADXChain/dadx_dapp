import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import './MainSidebarPanel.css'
import MainTopbarPanel from './MainTopbarPanel'
import logo from '../assets/dadxchain_logo.png'

class MainSidebarPanel extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top' id='mainNav'>
        <a href='/' className='navbar-brand'>
          <img src={logo} alt='dadxchain' />
        </a>
        <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav navbar-sidenav' id='exampleAccordion'>
            <li className='nav-item' data-toggle='tooltip' data-placement='right' title='Dashboard'>
              <a className='nav-link' href='/dashboard'>
                <i className='fa fa-fw fa-dashboard'></i>
                <span className='nav-link-text'>Dashboard</span>
              </a>
            </li>
            <li className='nav-item' data-toggle='tooltip' data-placement='right' title='Charts'>
              <a className='nav-link' href='/account'>
                <i className='fa fa-fw fa-user'></i>
                <span className='nav-link-text'>Account</span>
              </a>
            </li>
            <li className='nav-item' data-toggle='tooltip' data-placement='right' title='Trade'>
              <a className='nav-link' href='/trade'>
                <i className='fa fa-fw fa-table'></i>
                <span className='nav-link-text'>Trade</span>
              </a>
            </li>
            <li className='nav-item' data-toggle='tooltip' data-placement='right' title='Analysis'>
              <a className='nav-link' href='/analysis'>
                <i className='fa fa-fw fa-line-chart'></i>
                <span className='nav-link-text'>Analysis</span>
              </a>
            </li>
            <li className='nav-item' data-toggle='tooltip' data-placement='right' title='Components'>
              <a className='nav-link nav-link-collapse collapsed' data-toggle='collapse' href='#collapseComponents' data-parent='#exampleAccordion'>
                <i className='fa fa-fw fa-wrench'></i>
                <span className='nav-link-text'>Smart Contract</span>
              </a>
              <ul className='sidenav-second-level collapse' id='collapseComponents'>
                <li>
                  <a href='/publisher'>Publisher</a>
                </li>
                <li>
                  <a href='/advertiser'>Advertiser</a>
                </li>
              </ul>
            </li>
            <li className='nav-item' data-toggle='tooltip' data-placement='right' title='Support'>
              <a className='nav-link nav-link-collapse collapsed' data-toggle='collapse' href='#collapseExamplePages' data-parent='#exampleAccordion'>
                <i className='fa fa-fw fa-file'></i>
                <span className='nav-link-text'>Support</span>
              </a>
              <ul className='sidenav-second-level collapse' id='collapseExamplePages'>
                <li>
                  <a href='http://www.dadx.org'>Help Desk</a>
                </li>
                <li>
                  <a href='https://github.com/DADXChain/Project/issues'>Issue Bug</a>
                </li>
              </ul>
            </li>
            <li className='nav-item' data-toggle='tooltip' data-placement='right' title='Link'>
              <a className='nav-link' href='http://www.dadx.org'>
                <i className='fa fa-fw fa-link'></i>
                <span className='nav-link-text'>dadx.org</span>
              </a>
            </li>
          </ul>
          <ul className='navbar-nav sidenav-toggler'>
            <li className='nav-item'>
              <a className='nav-link text-center' id='sidenavToggler'>
                <i className='fa fa-fw fa-angle-left'></i>
              </a>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle mr-lg-2' id='messagesDropdown' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                <i className='fa fa-fw fa-envelope'></i>
                <span className='d-lg-none'>Messages
                  <span className='badge badge-pill badge-primary'>12 New</span>
                </span>
                <span className='indicator text-primary d-none d-lg-block'>
                  <i className='fa fa-fw fa-circle'></i>
                </span>
              </a>
            </li>
            <MainTopbarPanel />
          </ul>
        </div>
      </nav>
    )
  }
}

export default MainSidebarPanel
