import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
class Navbar extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-left'>
        
            <Link to="/"><img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'></img></Link>
            <Link to="movies/popular" style={{textDecoration:"none"}} ><span>popular</span></Link>
            <Link to="movies/top_rated" style={{textDecoration : "none"}}><span>Toprated</span></Link>
            <Link to="movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming </span></Link> 
        </div>        
      </div>
    )
    
  }
}

export default Navbar
