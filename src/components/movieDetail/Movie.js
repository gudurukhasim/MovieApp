import { useEffect,useState } from "react";
import React from 'react'
import { useParams } from "react-router-dom";
import './movie.css'
const Movie=() =>{
    const [currentMovieDetails , setMovie ] = useState()
    const {id} = useParams()

    useEffect (()=>{ getData() 
            window.scrollTo(0,0)} , 
            [])

     const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(res => res.json())
    .then(data => setMovie(data))
    }
  return (
    <div className=" movie">
        <div className="movie_intro">
            <img className="movie_backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetails ? currentMovieDetails.backdrop_path : " "}`} />
        </div>
        <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetails ? currentMovieDetails.poster_path : ""}`} />
                    </div>
                </div>
                <div className=" movie_detailsRight">
                    <div className="movie_detailsRightTop">
                        <div className="movie_title">{currentMovieDetails? currentMovieDetails.original_title : " "}</div>
                        <div className="movie_tagline">{currentMovieDetails? currentMovieDetails.tagline : " "}</div>
                        <div className="movie_rating">{currentMovieDetails? currentMovieDetails.vote_average : " "}
                            <span className="movie_voteCount">{currentMovieDetails? "(" + currentMovieDetails.vote_count + ") votes" : "" }</span>
                        </div>
                        <div className="movie__runtime">{currentMovieDetails ? currentMovieDetails.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetails ? "Release date: " + currentMovieDetails.release_date : ""}</div>
                        <div className="movie_genres">
                            {
                                currentMovieDetails && currentMovieDetails.genre
                                ? 
                                currentMovieDetails.genre.map( genre =>(
                                    <><span id={genre.id}>genre.name</span></>
                                ))
                                :
                                " "
                            } 

                        </div>
                        
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetails ? currentMovieDetails.overview : ""}</div>
                    </div>
                    
                </div>

                   
        </div>
        
     
    </div>
  )
}

export default Movie
