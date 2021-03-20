import Web3 from 'web3';
import React, { Component } from 'react'

export default class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {account: Web3.givenProvider.selectedAddress};
    console.log(this.state.account);  
  }

  componentDidMount() {
    window.ethereum.on('accountsChanged', () => {
      this.setState({
        account: Web3.givenProvider.selectedAddress
      });
      // console.log('ciao')
    })
  }

  render() {
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    )
  }
}
