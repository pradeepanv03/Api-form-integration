import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appp from './Appp';
import Axiosform from './Axiosform';
import LoginForm from './LoginForm';
import Main from './Curd/Main'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
    {/* <LoginForm/> */}
    {/* <Axiosform /> */}
    {/* <App /> */}
    {/* <Appp/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
