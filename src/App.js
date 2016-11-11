import React, { Component } from 'react';
import logo from './sso_logo.png';
import './App.css';
import AuthInput from './AuthInput';

const GREETING = 'WSO2 SSO React Demo';
const INTRO = 'Login here and verify that you are also automatically signed in at ';
const SSO_APP2 = 'https://dreddy-konrad.github.io';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2> {GREETING} </h2>
        </div>
        <p className='App-intro'>
          {INTRO + ' ' + SSO_APP2} 
        </p>
        <div className='auth'>
          <AuthInput inputType="username" />
          <AuthInput inputType="password" />
        </div>
      </div>
    );
  }
}

export default App;
