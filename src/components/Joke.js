import React, { Component, useContext, useState } from "react";
import frame from "../frame.png";
import main from "../main_dark.jpg";
import refresh from "../refresh.png";
import { Categories } from "./Categories";
import { RandomJokeContext } from "./GetRandomJoke";
import { JokeByCategoryContext } from "./GetJokeByCategory";

export const Joke = (props) => {
  const randomjoke = useContext(RandomJokeContext);

  const refreshPage = () => {
    window.location.reload(false);
  };

  let content = (
    <div>
      <Categories />
      <img src={main} alt="" className="background-image" id="main" />
      <img src={frame} alt="frame" id="frame-image" />
      <p id="text">{randomjoke}</p>
      <img
        src={refresh}
        alt=""
        className="refresh-button"
        onClick={refreshPage}
      />
    </div>
  );

  return content;
};
