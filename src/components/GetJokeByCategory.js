import React, { useEffect, createContext, useState } from "react";
import axios from "axios";
import { CategoryItem } from "./CategoryItem";

export const JokeByCategoryContext = createContext();

export const GetJokeByCategory = (props) => {
  const { chosenCategory } = props;

  const [jokeByCategory, setJokeByCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/random?" + chosenCategory)
      .then((response) => {
        if (!response.data.categories.includes(chosenCategory)) {
        }
        setJokeByCategory(response.data.value);
        console.log(response.data.value);
      });
  }, []);

  return (
    <JokeByCategoryContext.Provider value={[jokeByCategory, setJokeByCategory]}>
      {props.children}
    </JokeByCategoryContext.Provider>
  );
};
