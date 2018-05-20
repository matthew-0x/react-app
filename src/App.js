import React from 'react';
import { Button1 } from './Button1';
import { UpForm } from './UpForm';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  render() {
    
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome ... This is my ReactJS playground</h2>
        </div>
        <p className="App-intro">
          
        </p>
        <div className="mybutton">
         <Button1 />
         <UpForm />
        </div>
      </div>
    );
  }
}

export default App;
