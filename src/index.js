import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWc7_RGV2v9JC6wWosb6LObBsv3LLiUsM",
  authDomain: "ceciweb-perezalbizu.firebaseapp.com",
  projectId: "ceciweb-perezalbizu",
  storageBucket: "ceciweb-perezalbizu.appspot.com",
  messagingSenderId: "453404662198",
  appId: "1:453404662198:web:f22739f5f2b60f3475c917"
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
