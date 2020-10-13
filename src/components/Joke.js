import React, { Component } from "react";
import frame from '/Users/erdeszdora/Desktop/ADVANCED projects/ChuckNorris/chuck-norris/src/frame.png';
import Homepage from '/Users/erdeszdora/Desktop/ADVANCED projects/ChuckNorris/chuck-norris/src/components/Homepage.js';
import main from '/Users/erdeszdora/Desktop/ADVANCED projects/ChuckNorris/chuck-norris/src/main_dark.jpg';
import { Link } from 'react-router-dom';
import refresh from '/Users/erdeszdora/Desktop/ADVANCED projects/ChuckNorris/chuck-norris/src/refresh.png';


class Joke extends Component {
  state = {
    joke: "",
    isLoading: false,
  };

  refreshPage = () => {
    window.location.reload(false);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            joke: data.value
          });
        },

        (error) => {
          this.setState({
            error
          });
        }
      );
  }

 

  render() {
    return (
        <header className="App-header">
            <img src={main} alt="" className="background-image" id="main"/>
            <img src={frame} alt="frame" id="frame-image"/>
            <p id="text">{this.state.joke}</p>
            <img src={refresh} alt="" className="refresh-button" onClick={this.refreshPage}/>
        </header>
    
    );
  }
}

export default Joke;
