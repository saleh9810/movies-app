import React, { Component } from 'react';
import {connect} from 'react-redux'
import {removeFromFavorite} from '../../actions'
import {Link} from 'react-router-dom'



class Favorites extends Component {


    
    removeFavoriteMovie = (movie) => {
        this.props.removeFromFavorite(movie)
    }



    renderFavorites = () => {
        if(!this.props.favorite.length) {
            return (
                <div className="text-center mt-5">
                    <h1 className="text-light">Your list is empty</h1>
                </div>
            )

        }
        
        return (
            <div className="row text-center">
             <h3 className="text-center text-light  mt-3">Your favorites list</h3>
            {this.props.favorite.map(movie => (
                  <div className="col-md-3 col-sm-6 mt-3 movie-card"  key={movie.imdbID}>
                  <div className="favoriet cardBody">
                      <Link to={`/moviecard/${movie.imdbID}`}>
                  <img className="w-100 mb-2" alt="poster" src={movie.Poster} />
                  </Link>
                  <br />
                  <a className="removeFav" onClick={() => this.props.removeFromFavorite(movie)}><i className="fas fa-trash"></i> </a>
                  </div>
                   </div>
          
          ))}
         
  
              </div>
        )
    }




    render() { 
        return (
            <div>
            {this.renderFavorites()}
            </div>
        )   
         
         
    }
}

 const mapStateToProps = (state) => {
     return {
        favorite: state.favorites.favorite
      
     }
 }
 
export default connect(mapStateToProps, {removeFromFavorite})(Favorites);