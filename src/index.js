import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const firebaseConfig = {
  apiKey: "AIzaSyBB7Jl3j2Mdj3VXD0vX7X3w7N6bxv05RMI",
  authDomain: "cart-7494f.firebaseapp.com",
  projectId: "cart-7494f",
  storageBucket: "cart-7494f.appspot.com",
  messagingSenderId: "1092771784136",
  appId: "1:1092771784136:web:b12a95f39a9edae18eccfd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));
