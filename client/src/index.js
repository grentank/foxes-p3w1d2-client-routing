import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PostContextProvider } from './contexts/PostContext';
import { UserContextProvider } from './contexts/UserContext';
import store from './redux/store';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <UserContextProvider> */}
      <App />
      {/* </UserContextProvider> */}
    </Provider>
  </BrowserRouter>,
);
