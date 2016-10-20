import React from 'react';
import Transition from 'react-addons-css-transition-group';

let time;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {minutes: 0, seconds: 0, timerText:'00:00'};
    this.startTimer = this.startTimer.bind(this);
  }
  addTime() {
    this.setState({totalSeconds: (this.state.minutes * 60 + this.state.seconds)});
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
    time = setTimeout(this.addTime.bind(this), 1000);
  }
  stopTimer() {
    clearTimeout(time);
  }
  resetTimer() {
    this.setState({minutes: 0, seconds: 0, timerText: '00:00'});
  }
  render() {
    let dashArray = 534;
    let dashOffset = '0%';
    if (this.state.totalSeconds) {
      dashOffset = 534 - ((this.state.totalSeconds/270) * 534);
      // if (((this.state.totalSeconds/270) * 534) <= 100) {
      //   dashOffset = ((this.state.totalSeconds/270) * 534) * 10 - 90;
      // } else {
      //   dashOffset = ((this.state.totalSeconds/270) * 534);
      // }
    }
    return (
      <div id="timer-wrapper">
        <svg width="200" height="200">
          <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" fill="none" stroke="red" strokeWidth="5px" strokeDasharray={dashArray} strokeDashoffset={dashOffset}/>
        </svg>
        <div id="timer">{this.state.timerText}</div>
        <div id="button-wrapper">
          <button id="start" onClick={this.startTimer.bind(this)}>Start</button>
          <button id="stop" onClick={this.stopTimer}>Stop</button>
          <button id="reset" onClick={this.resetTimer.bind(this)}>Reset</button>
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
