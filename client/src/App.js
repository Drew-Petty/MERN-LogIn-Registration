import './App.css';
import React from 'react'
import {Router} from '@reach/router'
import Welcome from './views/Welcome'
import Home from './views/Home'


function App() {
  return (
    <div className="wrapper">
      <Router>
        <Welcome path="/"/>
        <Home path="/home"/>
      </Router>
    </div>
  );
}

export default App;
