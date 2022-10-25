
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const MovieComponent = (props) => {
  console.log(props.movie);
  const movie = props.movie;
  return (
    <div>
      <h1>{movie.title}</h1>
      {<img src={movie.poster}></img>}
    </div>
  );
};

const MovieForm = (props) => {
  const [Title, setTitle] = useState("");
  const [Director, setDirector] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");

  return (
    <div>
      <label>Title:MOfo</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <p>Current Title: {Title}</p>
      <button
        onClick={() => {
          const newMovie = {
            Title,
            Director,
            Images: [],
          };
          props.handleAddMovie(newMovie);
        }}>
        Add Movie
      </button>

      <select
        onChange={(e) => {
          setSelectedMovie(e.target.value);
        }}>
        {props.movieList.map((movie) => {
          return <option value={movie.Title}>{movie.Title}</option>;
        })}
      </select>

      <input
        type="text"
        onChange={(e) => {
          setImageUrl(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.handleAddImageToMovie(selectedMovie, imageUrl);
        }}>
        Add Image
      </button>
    </div>
  );
};

const MoviesDisplay = (props) => {
  return (
    <div>
      {props.movieList.map((movie, index) => {
        return <MovieItem movie={movie} key={index} />;
      })}
    </div>
  );
};

const MovieItem = (props) => {
  return (
    <div>
      <h1>{props.movie.Title}</h1>
      <p>{props.movie.Director}</p>
      {props.movie.Images &&
        props.movie.Images.map((imageUrl) => {
          console.log(imageUrl);
          return <img src={imageUrl.toString()}></img>;
        })}
      <hr />
    </div>
  );
};

function App() {
  const [movieList, setMovieList] = useState([]);

  const handleAddMovie = (newMovie) => {
    const movieListCopy = [...movieList, newMovie];
    movieListCopy.push(newMovie);
    setMovieList(movieListCopy);
    setMovieList(movieListCopy);
  };

  const handleAddImageToMovie = (movieTitleToTarget, imageUrlToAdd) => {
    const movieListCopy = [...movieList];

    const movieTargetIndex = movieListCopy.findIndex((movie) => {
      return movie.Title === movieTitleToTarget;
    });
    movieListCopy[movieTargetIndex].Images.push(imageUrlToAdd);

    setMovieList(movieListCopy);
  };

  console.log(movieList);
  return (
    <div className="App App-header">
      <MovieForm
        handleAddMovie={handleAddMovie}
        movieList={movieList}
        handleAddImageToMovie={handleAddImageToMovie}
      />
      <MoviesDisplay movieList={movieList} />
    </div>
  );
}

export default App;

 
