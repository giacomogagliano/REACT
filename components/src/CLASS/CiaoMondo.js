import React, { Component } from 'react'

function FormattedDate(props) {
  return <h1>It is {props.date.toLocaleTimeString()}.</h1>
}

class CiaoMondo extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
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

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Ciao, mondo!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default CiaoMondo