import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyMemo from './My_React/MyMemo';
import MyTimer from './My_React/MyTimer';
import MyNum from './My_React/MyNum';
import Guess from './Compound/Guess';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyMemo /> */}
    {/* <MyTimer /> */}
    {/* <MyNum /> */}
    <Guess />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
