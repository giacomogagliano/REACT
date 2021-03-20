//import { ethers } from '.ethers';
import Web3 from 'web3';
import React, { Component } from 'react'
import App from '../App';

export default class UserAccount extends Component {
  constructor(props) {
    const account = Web3.givenProvider.selectedAddress
    super(props);
    this.state = {account: Web3.givenProvider.selectedAddress};
    console.log(this.state.address);  
  }

  componentDidMount() {
    window.ethereum.on('accountsChanged', () => {
      this.setState({
        account: Web3.givenProvider.selectedAddress
      });
      console.log('ciao')
    })
  }

  render() {
    return (
      <div>
        You are connected with this address: {this.state.account}
        <App />
      </div>
    )
  }
}
