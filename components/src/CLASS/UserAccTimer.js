//import { ethers } from '.ethers';
import Web3 from 'web3';
import React, { Component } from 'react'

export default class UserAccount extends Component {
  constructor(props) {
    const account = Web3.givenProvider.selectedAddress
    super(props);
    this.state = {account: Web3.givenProvider.selectedAddress};
    console.log(this.state.address);  
  }

  tick() {
    this.setState({
      account: Web3.givenProvider.selectedAddress
    });
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        {this.state.account}
      </div>
    )
  }
}
