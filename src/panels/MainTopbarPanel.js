import React, { Component } from 'react'
import commafy from 'commafy'
import store from '../store'
import registry from '../services/registry'

class MainTopbarPanel extends Component {
  constructor () {
    super()

    this.state = {
      address: null,
      account: null,
      ethBalance: null,
      isLoading: true
    }
  }

  componentDidMount () {
    this.updateAddress()
    this.updateBalance()
    this.setState({
      isLoading: false
    })

    store.subscribe(x => {
      this.updateAddress()
      this.updateBalance()
    })
  }

  render () {
    let {
      ethBalance,
      address
    } = this.state

    return (
      <li className='nav-item'>
        <a className='nav-link' data-toggle='modal' data-target='#exampleModal'>
          {address ? <div className={'item ' + (ethBalance === 0 || ethBalance === null ? 'RedAlert' : '')}>
            You have {ethBalance !== null ? commafy(ethBalance.toFixed(4)) : '-'} ETH
          </div> : null}
        </a>
      </li>
    )
  }

  async updateAddress () {
    const address = registry.getAccount()

    this.setState({
      address
    })
  }

  async updateBalance () {
    try {
      const ethBalance = await registry.getEthBalance()

      this.setState({
        ethBalance: ethBalance.toNumber()
      })
    } catch (error) {
      this.setState({
        ethBalance: null
      })
    }
  }
}

export default MainTopbarPanel
