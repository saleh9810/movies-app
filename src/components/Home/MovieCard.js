import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {addToFavorite} from '../../actions'
import {connect} from 'react-redux'


class MovieCard extends Component {


 

  addFavouriteMovie = (movie) => {
       this.props.addToFavorite(movie)
  }

 

  
   



 
    render() {
        const { movie } = this.props;
      
        return (
          <div className="col-lg-3 col-md-3 col-sm-6 mb-5">
            <div className="cardBody text-center">
          
            <Link to={`/movie/${movie.imdbID}`}>
              <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
              </Link>  
              <a className="addButton"  onClick={() => this.addFavouriteMovie(movie)} ><i  className="fas fa-heart"></i></a>
              
            </div>
        
          </div>
        );
      }
}


 
export default connect( null ,{addToFavorite})(MovieCard);