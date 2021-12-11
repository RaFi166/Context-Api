import React, { useContext, useState } from 'react'
import { MovieContext } from '../MovieContext/MovieContext'
import Movies from './Movies'

const MovieLists = () => {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            {
                movies.map((allmovies) => (
                    <Movies moviedata={allmovies} />
                ))
            }
        </div>
    )
}

export default MovieLists
