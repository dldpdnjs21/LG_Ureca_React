import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GawibawiboGame from './myFile/GawibawiboGame';
import CssExam01 from './csstest/CssExam01';
import CssExam02 from './csstest/CssExam02';
import ButtonApp from './csstest/ButtonApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <GawibawiboGame /> */}
    {/* <CssExam01 /> */}
    {/* <CssExam02 /> */}
    <ButtonApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
