import React, { Component } from "react";
import CategoryItem from "./CategoryItem";

class Categories extends Component {
  state = {
    categories: [],
  };

  getCategories = () => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            categories: data,
          });
        },

        (error) => {
          this.setState({
            error,
          });
        }
      );
  };

  render() {
    this.getCategories();
    return this.state.categories.map((category) => (
      <div className="ui selection dropdown error">
        {/* Dropdown <i className="dropdown icon"></i> */}
        <div className="menu">
          <CategoryItem category={category} />
        </div>
      </div>
    ));
  }
}

export default Categories;
