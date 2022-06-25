import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import gameReducer from './redux/gameSlice'
import accountReducer from './redux/accountSlice'

const theStore = configureStore({
  reducer: {
    games: gameReducer,
    account: accountReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={theStore}>
    <App />
  </Provider>
);