import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reactDom from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reactDom.render(<App />, document.querySelector('#root'));
