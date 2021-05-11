import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {addToFavorite} from '../../actions'
import {connect} from 'react-redux'


class MovieCard extends Component {

  

 
    render() {
        const { movie } = this.props;

      
        return (
          <div className="col-lg-3 col-md-3 movie-card  mb-5">
            <div className="cardBody text-center">
          
            <Link to={`/movie/${movie.imdbID}`}>
              <img className="mb-2" src={movie.Poster} alt="Movie Cover" />
              </Link>                
            </div>
        
          </div>
        );
      }
}


 
export default connect( null ,{addToFavorite})(MovieCard);