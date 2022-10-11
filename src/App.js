// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

const MovieForm = (
  props
) => {
  const [
    title,
    setTitle,
  ] = useState("");
  const [
    director,
    setDirectorName,
  ] = useState("");
  const [
    actors,
    setActors,
  ] = useState("");
  const [plot, setPlot] =
    useState("");
  const [
    imbRating,
    setImbRating,
  ] = useState(0);
  return (
    <div>
      <div>
        <p>
          Actor:{actors}
        </p>
        <p>
          Movie Title::
          {title}
        </p>
        <p>
          Director Name:
          {director}
        </p>
        <p>
          plot:{plot}
        </p>

        <p>
          Rating:
          {imbRating}
        </p>
      </div>

      <div>
        {" "}
        <label>
          Set Directors
          Name:
        </label>{" "}
        <input
          type={"text"}
          onChange={(
            e
          ) => {
            setDirectorName(
              e.target
                .value
            );
          }}></input>
        <label>
          Set Title:
        </label>
        <input
          type={"text"}
          onChange={(
            e
          ) => {
            setTitle(
              e.target
                .value
            );
          }}></input>
        <label>
          Actor:
        </label>
        <input
          type={"text"}
          onChange={(
            e
          ) => {
            setActors(
              e.target
                .value
            );
          }}></input>
     <label>Rating</label><input type={'number'} step={0.1} onChange={(e)=>{

       setImbRating(+0.1)
     }}></input>
     
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieForm />
      </header>
    </div>
  );
}

export default App;
