import React from 'react';
import ReactDom from 'react-dom';
import Timer from './Components/Timer';
import Counter from './Components/Counter';

import store from './store';

const render = () => {
  ReactDom.render(<Counter value={store.getState()}/>, document.getElementById('container'));
}

// console.log(store.getState());
//
// const render = () => {
//   document.body.innerText = store.getState();
// }
//
store.subscribe(render);
render();
//
// document.addEventListener('click', () => {
//   store.dispatch({type:'INCREMENT'});
// });
