
import {connect} from 'react-redux'
import MovieCard from './MovieCard'


import React from "react";


const MoviesContainer = (props) => {

 
  const { movies } = props;
  console.log(movies)
  let content = "";
  if (movies === undefined) {
   content = <div><h1 className="text-center text-light">Cant find any my movies with this name</h1></div>
  } else {
    content = movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ));
  
  }
  return <div className="row">{content}</div>;
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);

