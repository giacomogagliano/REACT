import React, { Component } from 'react'

class FormTema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Per favore scrivi un tema riguardo il tuo elemento DOM preferito'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Un tema è stato inviato: ' +
      this.state.value
    );
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Tema:
          <textarea value={this.state.value}
          onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default FormTema
