import React, { createContext, useState } from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        { id: 1, name: "thor",price :20 },
        { id: 2, name: "captain" ,price :20},
        { id: 1, name: "hulk",price :20 },
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}
