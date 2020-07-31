import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header';
import Form1 from './component/Form1';
import List from './component/List';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Form1 />,
  document.getElementById('form1')
);

ReactDOM.render(
  <List />,
  document.getElementById('list')
);


serviceWorker.unregister();
