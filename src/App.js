import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Homepage from './components/Homepage';
import Joke from './components/Joke';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/joke" component={Joke} />
      
    </div>
    </Router>
  );
}

export default App;
