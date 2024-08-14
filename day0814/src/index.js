import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyNum from './MyFile/MyNum';
import MyNum2 from './MyFile/MyNum2';
import LandingPage from './MyFile/LandingPage';
import AttendanceBook from './MyFile/AttendanceBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyNum /> */}
    <MyNum2 />
    {/* <LandingPage /> */}
    {/* <AttendanceBook /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
