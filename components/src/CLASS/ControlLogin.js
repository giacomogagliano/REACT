import React from 'react';
import Benvenuto from './Autenticato';

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class ControlLogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {utenteAutenticato: false};
  }

  handleLoginClick() {
    this.setState({utenteAutenticato: true});
  }

  handleLogoutClick() {
    this.setState({utenteAutenticato: false});
  }

  render() {
    const utenteAutenticato = this.state.utenteAutenticato;
    let button;

    if (utenteAutenticato) {
      button = (
        <LogoutButton onClick={this.handleLogoutClick} />
      );
    } else {
      button = (
        <LoginButton onClick={this.handleLoginClick} />
      );
    }

    return (
      <div>
        <Benvenuto utenteAutenticato={utenteAutenticato} />
        {button}
      </div>
    )
  }
}

export default ControlLogin