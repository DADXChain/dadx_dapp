import Eth from 'ethjs'
import { promisify as pify } from 'bluebird'
import detectNetwork from 'web3-detect-network'

import store from '../store'
import { getProvider } from './provider'

// TODO: check number param
const big = (number) => new Eth.BN(number.toString(10))
const tenToTheEighteenth = big(10).pow(big(18))

class RegistryService {
  constructor () {
    this.registry = null
    this.account = null
    this.address = null
  }

  async init () {
    /*
     * important to check for provider in
     * init function (rather than constructor),
     * so that injected web3 has time to load.
    */
    this.provider = getProvider()
    this.eth = new Eth(getProvider())
    const accounts = await this.eth.accounts()
    this.account = accounts[0]

    // this.registry = await getRegistry(this.account)
    this.address = this.registry.address

    this.setUpEvents()
    this.setAccount()

    store.dispatch({
      type: 'REGISTRY_CONTRACT_INIT'
    })
  }

  async setAccount () {
    const accounts = await this.eth.accounts()

    if (window.web3 && !window.web3.eth.defaultAccount) {
      window.web3.eth.defaultAccount = accounts[0]
    }
  }

  getAccount () {
    return this.account
  }

  async getEthBalance () {
    if (!window.web3) {
      return 0
    }

    const result = await pify(window.web3.eth.getBalance)(this.account)
    return result.div(tenToTheEighteenth)
  }

  getNetwork () {
    return detectNetwork(this.provider)
  }
}

export default new RegistryService()
