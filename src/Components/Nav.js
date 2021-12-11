import React, { useContext, useState } from 'react'
import { MovieContext } from '../MovieContext/MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            <nav>
                <li>Rafi</li>
                <li>Movies :{movies.length} </li>
            </nav>
        </div>
    )
}

export default Nav
