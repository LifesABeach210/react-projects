import React from "react";
import { Outlet } from "react-router-dom";
import MovieCard from "../componets/MovieCard";
const MovieListPage = (props) => {
 const {movieList} =props;
 
 
    return (
    <div className="movie-list">
      <h1>Movie-Listt</h1>
    <div>
        {movieList.map((movie)=>{

return(
    <MovieCard movie={movie}/>
)

        })}
    </div>
     
      
      <Outlet />
    </div>
  );
};

export default MovieListPage;
