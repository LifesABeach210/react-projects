import React, { useState } from 'react'

const MovieFormPage = (props) => {
 const [randomState,setRandomState] = useState([])
 
    const {movieList,handleAddMovie} = props;

  
  
  
    return (
    <div className='movie-form-page'>
       <input type="text"></input>
       
        <h1 className='form-h1'>MovieFormPage</h1><button onClick={()=>{
	handleAddMovie()
}}>Add Movie</button></div>
  )
}

export default MovieFormPage