import React from 'react'

const scale = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

export default  class InputTemperatura extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperatura: ''};
  }

  handleChange(e) {
    this.props.onChangeTemperatura(e.target.value)
  }

  render() {
    const temperatura = this.props.temperatura;
    const scala = this.props.scala;
    return (
      <fieldset>
        <legend>
          Inserisci la temperatura in gradi {scale[scala]}:
        </legend>
        <input value={temperatura} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
