import React, { Component } from 'react';
import main from '/Users/erdeszdora/Desktop/ADVANCED projects/ChuckNorris/chuck_norris_2/src/main.jpg';
import enter from '/Users/erdeszdora/Desktop/ADVANCED projects/ChuckNorris/chuck_norris_2/src/enter.png'
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";


class Homepage extends Component {

    // onClick={this.props.history.push('/joke')}
    render() {  

        return (
            <header className="App-header">
                <img src={main} className="background-image" alt="logo" />
                <Link to="/joke"><img src={enter} className="enter" alt="enter"  /></Link>
                
                {/* <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a> */}
            </header>
        );
    }

}


export default Homepage;