import React from 'react';
import ReactDOM from 'react-dom';
import ChatScreen from './App';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBK2RLELn1syKRlBv3GehumXJKQ-mNMXYc",
  authDomain: "chatapp-45941.firebaseapp.com",
  databaseURL: "https://chatapp-45941.firebaseio.com",
  projectId: "chatapp-45941",
  storageBucket: "chatapp-45941.appspot.com",
  messagingSenderId: "874009345497"
};
firebase.initializeApp(config);

ReactDOM.render(
  <ChatScreen />,
  document.getElementById('chatscreen')
);
