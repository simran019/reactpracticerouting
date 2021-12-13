import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';
import MyContact from './Contact2';
import Myexamplecomponent from './simpleclassapproach';
import Checkcount from './hookapproach';
import Mypropsandhooks from './propsandhooks';
import Fetchemailids from './displaydatausingmap';
import Myusersid from './fetchdatausingapi';
ReactDOM.render(
  <React.StrictMode>
     <App />
    {/*<Contact/>
    <MyContact id="90908890"/>
    <Myexamplecomponent/>
    <Checkcount/>
    <Mypropsandhooks no="0"/>
    <Fetchemailids/>
    <Myusersid/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
