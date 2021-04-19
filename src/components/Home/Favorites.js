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
            <div className="row text-center  fav-card">
             <h3 className="text-center">Your favorites list</h3>
            {this.props.favorite.map(movie => (
                  <div className="col-md-3 col-sm-6 mb-5"  key={movie.imdbID}>
                  <div className="favoriet">
                      <Link to={`/movie/${movie.imdbID}`}>
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