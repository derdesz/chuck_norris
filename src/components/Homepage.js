import React, { Component } from 'react';
import main from '../main.jpg';
import enter from '../enter.png'
import {Link} from "react-router-dom";
import Dropdown from './Dropdown';


class Homepage extends Component {

    render() {  

        return (
            <header className="App-header">
                <Dropdown className="dropdown"/>
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