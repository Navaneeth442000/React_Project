import React, { useState } from 'react'
import './Banner.css'
import {useEffect} from 'react'
import {API_KEY, imageUrl} from '../../Constants/Constants'
import axios from '../../axios'

function Banner() {
    
    const [movie, setMovie] = useState()
    useEffect(()=>{
        let num = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0])
            console.log("nummm"+num)
            setMovie(response.data.results[num])
        })
    }, [])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
            <button className="botton">Play</button>
            <button className="botton">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
