import React from "react";
import { Outlet } from "react-router-dom";
const MovieListPage = (props) => {
 const {movieList} =props;
 
 
    return (
    <div className="movie-content">
      <h1>Movie-Content</h1>
      <Outlet />
    </div>
  );
};

export default MovieListPage;
