import React from 'react';

import store from '../store';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  onIncrement() {
    store.dispatch({type: 'INCREMENT'});
  }
  onDecrement() {
    store.dispatch({type: 'DECREMENT'});
  }
  render() {
    return (
      <div id="number">
        <h1>{this.props.value}</h1>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
