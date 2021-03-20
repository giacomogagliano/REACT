import React, { Component } from 'react'
import Web3 from 'web3';

let x = Web3.givenProvider.selectedAddress;
console.log(x);
// form per inserire dati nelle funzioni Smart Contract
// necessita di recuperare i dati provenienti da UserAccount
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromAddress: '',
    }
  }
  render() {
    return (
      <form>
        <label>From Address</label>
        <input value={this.state.fromAddress}/>
      </form>
      
    )
  }
}

export default App


class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAddress: Web3.givenProvider.selectedAddress
    };
    console.log(this.state.userAddress);
  }
  render() {
    return (
      <App 
        fromAddress={this.state.userAddress}
      />
    )
  }
}

