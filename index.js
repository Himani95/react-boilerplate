import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import './index.css';
import './components/Login.css';
import App from './App';
import LoginForm from './components/LoginForm';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

/*Date:3 July 2020
Author: Himani
Description: To give the user as much visual feedback as possible
Downloaded the react-promise-tracker package
This library allows us to show the loading spinner and control it*/
const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress &&
      <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
    );  
   }

const store = createStore(reducer)

ReactDOM.render(
  //<BrowserRouter>
    //<App />
  //</BrowserRouter>
  <Provider store={store}>
    <App />
    <LoadingIndicator />
  </Provider>,
  //<React.StrictMode>
  // <App />
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
