import React from 'react';
import Transition from 'react-addons-css-transition-group';

import store from '../store';

console.log(store);
let time;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {minutes: 0, seconds: 0, timerText:'00:00', running: false};
    this.startTimer = this.startTimer.bind(this);
  }
  addTime() {
    store.dispatch({type: 'INCREMENT'});
    console.log(store.getState());
    this.setState({totalSeconds: (this.state.minutes * 60 + this.state.seconds)});
    if (this.state.seconds < 59) {
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
   time = setTimeout(this.addTime.bind(this), 1000);
  }
  startTimer() {
    this.setState({running: !this.state.running});
    if (this.state.running === true) {
      this.stopTimer();
    } else {
      console.log('stopping');
      time = setTimeout(this.addTime.bind(this), 1000);
    }
  }
  stopTimer() {
    clearTimeout(time);
  }
  resetTimer() {
    this.setState({minutes: 0, seconds: 0, timerText: '00:00', totalSeconds: 0});
  }
  render() {
    console.log(this.state);
    let dashArray = 534;
    let dashOffset = '0%';
    if (this.state.totalSeconds) {
      let time = () => {
        switch(this.state.method) {
        case 'chemex':
          return 270;
        case 'kalita':
          return 150;
        case 'aeropress':
          return 120;
        case 'french-press':
          return 240;
        default:
          return 120;
      }
    }
      dashOffset = 534 - ((store.getState().totalSeconds/time) * 534);
    }
    return (
      <div id="timer-wrapper">
        <svg width="190" height="200">
          <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" fill="none" stroke="#000" strokeWidth="5px" strokeDasharray={dashArray} strokeDashoffset={dashOffset}/>
        </svg>
        <div id="timer" onClick={this.startTimer.bind(this)}>{this.state.timerText}<p>Click to start & stop</p></div>
        <div id="button-wrapper">
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
