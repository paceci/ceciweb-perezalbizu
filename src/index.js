import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBvl_jMwdc0XJc5qXZD3saGnF2Smx2geRA",
  authDomain: "de-la-terraza.firebaseapp.com",
  projectId: "de-la-terraza",
  storageBucket: "de-la-terraza.appspot.com",
  messagingSenderId: "439327771084",
  appId: "1:439327771084:web:f487a9da87ed57c86fb569"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
