import React from 'react'
import UserAccount from './WEB3/UserAccount'


export default function App(props) {
  return (
    
    <div>
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

