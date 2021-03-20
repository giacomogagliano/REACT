import React, { Component } from 'react'

class FormGusti extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'cocco'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value});
  }

  handleSubmit(event) {
    alert('Il tuo gusto preferito è: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Seleziona il tuo gusto preferito:
          <select value={this.state.value}onChange={this.handleChange}>
            <option value='pompelmo'>Pompelmo</option>
            <option value='limone'>Limonte</option>
            <option value='cocco'>Cocco</option>
            <option value='mango'>Mango</option>
          </select>
        </label>
        <input type='submit' value='Sumbit' />
      </form>
    )
  }
}

export default FormGusti