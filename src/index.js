import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
