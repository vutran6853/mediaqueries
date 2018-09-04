import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className='nav'>
          
          <a href='#' className='navlogo' >Start Bootstrap</a>

          <div className='navbar'>
            <ul>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>PortFolio</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Team</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mainHeader'>
            <p>Welcome To Our Studio!<br/>
              IT'S NICE TO MEET YOU</p>
        </div>

      </div>
    );
  }
}

export default App;
