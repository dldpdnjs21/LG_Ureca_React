import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GameNumber from './myFile/GameNumber';
import WelcomeDialog from './myFile/WelcomeDialog';
import MyNumberGuess4 from './myFile/MyNumberGuess4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <GameNumber /> */}
    {/* <WelcomeDialog /> */}
    <MyNumberGuess4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
