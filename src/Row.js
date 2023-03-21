import React, { useState, useEffect } from 'react'
import instance from './axios';
import './Row.css'

const base_url = "http://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads and dont run again
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        // Whenever i use anything inside the useEffect if there is any variable that has been pulled of outside
        // and used it inside the useEffect have to include it to the square brackets (as a 2nd argument)
    },[fetchUrl]) 

    console.log(movies);
  return (
    <div className='row'>
        <h2>{title}</h2>
        
        <div className='row__posters'>
          {movies?.map(movie => (
            <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
          ))}
        </div>
        {/* container -> posters */}
    </div>
  )
}

export default Row