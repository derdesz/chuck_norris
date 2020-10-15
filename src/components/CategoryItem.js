import React, { useEffect, createContext, useState } from "react";
import button from "../refresh.png";
import { GetJokeByCategory } from "./GetJokeByCategory";

// export const ChosenCategoryContext = createContext();

export const CategoryItem = (props) => {
  const [chosencategory, setChosenCategory] = useState("");
  const { category } = props;

  const handleClick = (e) => {
    setChosenCategory(e.target.id);
    console.log(chosencategory);
  };

  return (
    <div className="category-box">
      <div className="category-button">
        <img
          src={button}
          id={category}
          alt=""
          className="button-image"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <h2 className="category-text">{category}</h2>
      </div>
      <GetJokeByCategory chosencategory={chosencategory} />
    </div>
  );
};
