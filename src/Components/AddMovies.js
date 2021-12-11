import React, { useContext } from 'react'
import { useState } from 'react/cjs/react.production.min'
import { MovieContext } from '../MovieContext/MovieContext';

const AddMovies = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [movies, setMovies] = useContext(MovieContext);

    const onname = e => {
        setName(e.target.value)
    }
    const onprice = e => {
        setPrice(e.target.value)
    }
    const subForm = e => {
        e.preventDefault();
        setMovies(setData => [...setData , {name : name , price : price}])

    }
    return (
        <div>
            <form onSubmit={subForm}>
                <input type="text" value={name} onBlur={onname} />
                <input type="text" value={price} onBlur={onprice} />
                <button >Submit</button>
            </form>
        </div>
    )
}

export default AddMovies
