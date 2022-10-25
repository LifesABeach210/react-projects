import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieSidebar = (props) => {
  const { movieList } = props;

  return (
    <div className="movie-sidebar">
      <h2>Movie-Sidebar</h2>
      <div className="movie-list">
{props.movieList.map((movie)=>{
return <MovieCard movie = {movie} />;



})}

      </div>
      
      
      {props.movieList.map((movie) => {
        return (
          <div>
            <ol>
             
                <Link to={`/movies/${movie.Title}`}>{movie.Title}</Link>
               
             
            </ol>
          </div>
        );
      })}
        </div>
  );
};

export default MovieSidebar;
