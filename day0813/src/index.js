import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyToggle from './myFile2/MyToggle';
import MyFunctionToggle from './myFile2/MyFunctionToggle';
import ConfirmButton from './myFile2/ConfirmButton';
import ConfirmButton2 from './myFile2/ConfirmButton2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyToggle /> */}
    {/* <MyFunctionToggle /> */}
    {/* <ConfirmButton /> */}
    <ConfirmButton2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
