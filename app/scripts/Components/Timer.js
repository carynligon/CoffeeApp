import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {minutes: 0, seconds: 0, timerText:'00:00'};
    this.startTimer = this.startTimer.bind(this);
  }
  addTime() {
    if (this.state.seconds <= 58) {
      this.setState({seconds: this.state.seconds + 1})
     if (this.state.seconds <= 9 && this.state.minutes <= 9) {
       this.setState({timerText: '0' + this.state.minutes + ':' + '0' + this.state.seconds})
     } else if (this.state.seconds >= 10 && this.state.minutes <= 9) {
       this.setState({timerText: '0' + this.state.minutes + ':' + this.state.seconds})
     } else {
       this.setState({timerText: this.state.minutes + ':' + this.state.seconds})
     }
    } else {
      this.setState({minutes: this.state.minutes + 1, seconds: 0})
   }
   this.startTimer();
  }
  startTimer() {
    let time = setTimeout(this.addTime.bind(this), 1000);
  }
  stopTimer() {
    clearTimeout();
  }
  resetTimer() {
    this.props.minutes = 0;
    this.props.seconds = 0;
    timer.textContent = '00:00';
  }
  render() {
    return (
      <div id="timer-wrapper">
        <div id="timer">{this.state.timerText}</div>
        <div id="button-wrapper">
          <button id="start" onClick={this.startTimer.bind(this)}>Start</button>
          <button id="stop" onClick={this.stopTimer}>Stop</button>
          <button id="reset" onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    )
  }
}

Timer.defaultProps = {
  minutes: 0,
  seconds: 0
}

export default Timer;
