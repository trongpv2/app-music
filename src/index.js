import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Form1 from './components/Form1';
import List from './components/List';
import Demo from './components/ListItem';
import Paginate from './components/Paginate';
import * as serviceWorker from './serviceWorker';
import "./components/style.css";

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Form1 />,
  document.getElementById('form1')
);

// ReactDOM.render(
//   <List />,
//   document.getElementById('list')
// );

// ReactDOM.render(
//   <Paginate />,
//   document.getElementById('paginate')
// );

ReactDOM.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
  document.getElementById('list')
);


serviceWorker.unregister();
