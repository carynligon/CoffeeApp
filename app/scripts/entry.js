import React from 'react';
import ReactDom from 'react-dom';
import Timer from './Components/Timer';

import store from './store';

ReactDom.render(<Timer/>, document.getElementById('container'));

// console.log(store.getState());
//
// const render = () => {
//   document.body.innerText = store.getState();
// }
//
// store.subscribe(render);
// render();
//
// document.addEventListener('click', () => {
//   store.dispatch({type:'INCREMENT'});
// });
