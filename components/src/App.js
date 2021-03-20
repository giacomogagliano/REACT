import React from 'react'
import MetamaskButton from './WEB3/MetamaskButton'
import UserAccount from './WEB3/UserAccount'


export default function App(props) {
  return (
    
    <div>
      <MetamaskButton />
      <UserAccount render = {user => (
        <p>this is your address: {user.account}</p>)} />
      <form>
        <label>
          from:
        </label>
        <UserAccount render = {user => (
            <input value={user.account}/>
          )
        } />
      </form>
    </div>
  )
}

