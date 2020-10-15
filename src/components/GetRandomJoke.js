import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios';


export const RandomJokeContext = createContext();

export const RandomJokeProvider = (props) => {

    const [joke, setJoke] = useState("");
    
    useEffect(() => {
      axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((response) => {
            setJoke(response.data.value)
        })
        
    }, [])

    return (
        <RandomJokeContext.Provider value={[joke, setJoke]}>
            {props.children}
        </RandomJokeContext.Provider>
    );

} 