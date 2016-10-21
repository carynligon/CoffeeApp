import React from 'react';
import ReactDom from 'react-dom';
import deepFreeze from 'deep-freeze';
import expect from 'expect';
import Timer from './Components/Timer';
import Counter from './Components/Counter';
import PickMethod from './Components/PickMethod';

import store from './store';

const render = () => {
  ReactDom.render(<PickMethod/>, document.getElementById('container'));
}

render();
