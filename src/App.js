import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Homepage from "./components/Homepage";
import { Joke } from "./components/Joke";
import "./App.css";
import { CategoryProvider, GetCategory } from "./components/GetCategories";
import { RandomJokeProvider } from "./components/GetRandomJoke";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <CategoryProvider>
          <RandomJokeProvider>
            <Route path="/joke" render={(props) => <Joke />} />
          </RandomJokeProvider>
        </CategoryProvider>
      </div>
    </Router>
  );
}

export default App;
