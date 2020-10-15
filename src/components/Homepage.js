import React, { Component } from "react";
import main from "../main.jpg";
import enter from "../enter.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import CategoryItem from "./CategoryItem";
import Categories from "./Categories";

class Homepage extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={main} className="background-image" alt="logo" />
        <Link to="/joke">
          <img src={enter} className="enter" alt="enter" />
        </Link>
      </header>
    );
  }
}


export default Homepage;
