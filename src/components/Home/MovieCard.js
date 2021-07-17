import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {addToFavorite, removeFromFavorite} from '../../actions'
import {connect} from 'react-redux'


class MovieCard extends Component {

  

 
    render() {
        const { movie, favorite} = this.props;

        const ifAlreadyFavorite = () => {
          
          if(favorite.some(item => item.imdbID === movie.imdbID)) {
             return (
                  <span className="addButton-red"><i onClick={() =>  this.props.removeFromFavorite(movie)}  className="fas fa-heart"></i></span>
             )
          }else {
            return (
              <span className="addButton" ><i onClick={() =>  this.props.addToFavorite(movie)}  className="fas fa-heart"></i></span>
            )
          }

         

          
        }

      
        return (
          <div className="col-lg-3 col-md-3 movie-card  mb-5">
            <div className="cardBody text-center">
          
            <Link to={`/movie/${movie.imdbID}`}>
              <img className="" src={movie.Poster} alt="Movie Cover" />
              </Link>  
              {ifAlreadyFavorite()}
   
            </div>


        
          </div>
        );
      }
}

const mapStateToProps = (state) => ({
  favorite: state.favorites.favorite,


});



 
export default connect( mapStateToProps ,{addToFavorite, removeFromFavorite})(MovieCard);