import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todos from './App';
import 'antd/dist/antd.css';
import { store } from './store/store';
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Todos />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
