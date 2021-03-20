import React, { Component } from 'react'

window.ethereum.on('accountsChanged', function () {
  // Time to reload your interface with accounts[0]!
  console.log('ciao')
})

export default class AccountChange extends Component {
   

  render() {
    return (
      <div>
        Prova
      </div>
    )
  }
}
