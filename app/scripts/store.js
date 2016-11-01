import { createStore } from 'redux';

const counter = (state={minutes: 0, seconds: 0},action) => {
  switch(action.type) {
    case 'INCREMENT':
      if (state.seconds < 59) {
        if (state.seconds <= 9 && state.minutes <= 9) {
          return {minutes: state.minutes, seconds: state.seconds+1, totalSeconds: (state.minutes*60)+state.seconds, timerText: '0' + state.minutes + ':' + '0' + state.seconds};
        } else if (state.seconds >= 10 && state.minutes <= 9) {
          return {minutes: state.minutes, seconds: state.seconds+1, totalSeconds: (state.minutes*60)+state.seconds, timerText: '0' + state.minutes + ':' + state.seconds}
        } else {
          return {minutes: state.minutes, seconds: state.seconds+1, totalSeconds: (state.minutes*60)+state.seconds, timerText: state.minutes + ':' + state.seconds}
        }
      } else {
        return {minutes: state.minutes+1, seconds: state.seconds, totalSeconds: (state.minutes*60)+state.seconds};
      }
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }
}

export default createStore(counter);
