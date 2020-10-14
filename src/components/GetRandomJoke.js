import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios';


export const RandomJokeContext = createContext();

export const RandomJokeProvider = (props) => {

    const [category, setCategory] = useState("");
    
    useEffect(() => {
      axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((response) => {
            setCategory(response.data)
        })
        console.log(category);
    }, [])

    return (
        <RandomJokeContext.Provider value={[category, setCategory]}>
            {props.children}
        </RandomJokeContext.Provider>
    );

} 