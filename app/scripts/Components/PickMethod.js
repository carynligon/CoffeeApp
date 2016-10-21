import React from 'react';

import Timer from './Timer';

class pickMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  chemexTimer() {
    this.setState({method: 'chemex'});
  }
  kalitaTimer() {
    this.setState({method: 'kalita'});
  }
  aeropressTimer() {
    this.setState({method: 'aeropress'});
  }
  frenchpressTimer() {
    this.setState({method: 'french-press'});
  }
  render() {
    console.log(this.state);
    let content = (<div className="method-wrapper">
      <h2>Pick a Method</h2>
      <div className="method chemex" onClick={this.chemexTimer.bind(this)}><h3>Chemex</h3></div>
      <div className="method kalita" onClick={this.kalitaTimer.bind(this)}><h3>Kalita</h3></div>
      <div className="method aeropress" onClick={this.aeropressTimer.bind(this)}><h3>Aeropress</h3></div>
      <div className="method french-press" onClick={this.frenchpressTimer.bind(this)}><h3>French Press</h3></div>
    </div>);
    if (this.state.method) {
      content = (<Timer method={this.state.method}/>);
    }
    return (
      <main>
        {content}
      </main>
    );
  }
}

export default pickMethod;
