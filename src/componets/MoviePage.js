import React from "react";
import { useParams } from "react-router-dom";
const MoviePage = (props) => {
  const params = useParams();
  const titleParam = params.Title;
  const { movieList } = props;

  return (
    <div>
      <h1>Movie-Page</h1>
      {props.movieList.map((movie) => {
        if (titleParam === movie.Title) {
          return (
            <div>
              <h2>{movie.Title}</h2>
              <p>{movie.Director}</p>
              <p>{movie.Plot}</p> <p>{movie.Actors}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MoviePage;
