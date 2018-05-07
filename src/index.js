import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import registerServiceWorker from './registerServiceWorker';

console.log(process.env)
axios.get(`/feed/1.0.0/update.json`).then(res => {
  console.log(res)
});
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
