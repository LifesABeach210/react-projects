import React from "react";
import MovieSidebar from "../componets/MovieSidebar";
import { Outlet } from "react-router-dom";




export const MovieLayout = (props) => {
 
 const {movieList} = props
    return (
    <div className="movie-layout">
      <MovieSidebar movieList = {movieList} />
      <div className="movie-content"><Outlet/></div>
  
  
  
    </div>
  );
};
