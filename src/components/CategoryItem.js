import React, { Component } from "react";

class CategoryItem extends Component {
  render() {
    return (
      <div classname="category-item">
        <p>{this.props.category}</p>
      </div>
    );
  }
}

export default CategoryItem;
