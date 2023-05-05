import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createStore} from 'redux';
import studentReducer from './redux/reducers/studentReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { GoogleOAuthProvider } from '@react-oauth/google';

const store=createStore(studentReducer,composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <GoogleOAuthProvider clientId="774753110601-32vd65hjdts4d9osrjcaru16f7a1d8dd.apps.googleusercontent.com"><App/></GoogleOAuthProvider>;
  </Provider>
 );

reportWebVitals();
