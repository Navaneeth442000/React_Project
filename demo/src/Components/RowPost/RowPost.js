import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../../Constants/Constants'

function RowPost(props) {
    const [urlId, setUrlId] = useState('')
    const [movie, setMovie] = useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovie(response.data.results)
        }).catch(err=>{
            // alert('Network Error')
        })
    })
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleMovie = (id)=>{
      console.log(id);
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data);

        if(response.data.results.length !== 0){
          setUrlId(response.data.results[0]);
        }
        else{
          console.log('Array empty!!!');
        }
      })
    }
  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className="posters">

        {
            movie ? movie.map((obj)=>{
                return(
                    <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall ? 'smallPoster' : 'poster'} src={obj ? imageUrl+obj.backdrop_path : ""} alt="poster" />
                )
            }) : ""
        }
        
      </div>
      { urlId && <Youtube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost
