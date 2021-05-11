import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {addToFavorite} from '../../actions'
import {connect} from 'react-redux'


class MovieCard extends Component {

  constructor(props){
    super(props)
    this.state ={
      button: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      button:!this.state.button
    })
  }


 
    render() {
        const { movie } = this.props;

      
        return (
          <div className="col-lg-3 col-md-3 movie-card  mb-5">
            <div className="cardBody text-center">
          
            <Link to={`/movie/${movie.imdbID}`}>
              <img className="mb-2" src={movie.Poster} alt="Movie Cover" />
              </Link>  
              <span className={this.state.button ? "addButton": "addButton-red"}  onClick={() => this.handleClick()}   ><i  onClick={() =>  this.props.addToFavorite(movie)}  className="fas fa-heart"></i></span>
              
            </div>
        
          </div>
        );
      }
}


 
export default connect( null ,{addToFavorite})(MovieCard);