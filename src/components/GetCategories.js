import React, { useEffect, createContext, useState } from "react";
import axios from "axios";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  return (
    <CategoryContext.Provider value={[categories, setCategories]}>
      {props.children}
    </CategoryContext.Provider>
  );
};
