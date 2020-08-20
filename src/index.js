import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import 'line-awesome/dist/font-awesome-line-awesome/css/all.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './index.css';
import './newStyle.css';
import './responsive.css';
import App from './App';

import { Provider } from 'react-redux';
import  store  from './redux/store'
import * as serviceWorker from './serviceWorker';
//reduxdemo.txt

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
