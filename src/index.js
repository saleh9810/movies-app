import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'



function saveState(state) {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
  }catch(err) {
      console.log(err);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
        return undefined;
    }
    return JSON.parse(serializedState);
}catch(err) {
    console.log(err);
    return undefined
}
}

const persistedState  = loadFromLocalStorage()





const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() =>  saveState({ favorites: store.getState().favorites},));




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
