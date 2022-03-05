import React from 'react';
import Tabs from './tabs';

class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {time: new Date()}
    this.tick = this.tick.bind(this)
  }

  tick() {
    const time = new Date();
    this.setState({ time });
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    let hours = this.state.time.getHours();
    let mins = this.state.time.getMinutes();
    let secs = this.state.time.getSeconds();

    return(
      <div>
        <h1>Clock</h1>
        <p className="timer">{hours}::{mins}::{secs}</p>
        
      </div>
    )
  }
}

export default Clock;