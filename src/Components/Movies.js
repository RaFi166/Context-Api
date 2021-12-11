import React from 'react'

const Movies = (props) => {
    const{ name, price} = props.moviedata;
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Movies
