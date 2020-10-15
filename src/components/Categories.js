import React, { Component, useContext, useState } from "react";
import { CategoryItem } from "./CategoryItem";
import { CategoryContext } from "./GetCategories";

export const Categories = (props) => {
  const [categories] = useContext(CategoryContext);

  console.log(categories);

  let content = (
    <div id="category-container">
      {categories.map((category) => (
        <CategoryItem key={category} category={category} />
      ))}
    </div>
  );

  return content;
};
