
import {connect} from 'react-redux'
import MovieCard from './MovieCard'


import React from "react";


const MoviesContainer = (props) => {

 
  const { movies } = props;
  console.log(movies)
  let content = "";
  if (movies === undefined) {
   content = <div className="text-center"> <img  src="https://img.icons8.com/cotton/100/000000/road-closure--v1.png"/><h1 className="text-light mt-3"> Not Found</h1></div>
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

