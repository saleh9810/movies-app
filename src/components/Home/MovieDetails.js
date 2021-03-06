import React from 'react';
import {connect} from 'react-redux'
import {fetchMovie, setLoading, addToFavorite, removeFromFavorite} from '../../actions'
import {Link} from 'react-router-dom'
import Spinner from '../layout/Spinner'

class MovieDetails extends React.Component {

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
        
      
      }

      
 
      render() {
        
        const { loading, movie, favorite } = this.props;

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

       

       
 
    
        let movieInfo = (
          <div className="container">
            <div className="row">
              <div className="col-md-4 mt-5 card card-body">
                <img src={movie.Poster} className="thumbnail" alt="Poster" />
              </div>
              <div className="col-md-8 mt-5">
                <h2 className="mb-4 text-light text-center">{movie.Title}</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Genre:</strong> {movie.Genre}
                  </li>
                  <li className="list-group-item">
                    <strong>Released:</strong> {movie.Released}
                  </li>
                  <li className="list-group-item">
                    <strong>Rated:</strong> {movie.Rated}
                  </li>
                  <li className="list-group-item">
                    <strong>IMDB Rating:</strong> {movie.imdbRating}
                  </li>
                  <li className="list-group-item">
                    <strong>Director:</strong> {movie.Director}
                  </li>
                  <li className="list-group-item">
                    <strong>Writer:</strong> {movie.Writer}
                  </li>
                  <li className="list-group-item">
                    <strong>Actors:</strong> {movie.Actors}
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="cardDetails card card-body bg-dark my-5 text-light">
                <div className="col-md-12">
                  <h3>About </h3>
                  {movie.Plot}
                  <hr />
                  <a
                    href={'https://www.imdb.com/title/' + movie.imdbID}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-imdb" style={{color: "rgb(245,197,24)", fontSize: "50px"}} />
                  </a>
                  <Link to="/" className="btn btn-danger mb-4 ms-3 text-light">
                     Back To Search
                  </Link>

                  {ifAlreadyFavorite()}

                </div>
              </div>
            </div>
          </div>
        );
    
        let content = loading ? <Spinner /> : movieInfo;
        return <div>{content}</div>;
      }
    }
    
    const mapStateToProps = state => ({
      loading: state.movies.loading,
      movie: state.movies.movie,
      favorite: state.favorites.favorite,

    });
    
    export default connect(
      mapStateToProps,
      { fetchMovie, setLoading, addToFavorite, removeFromFavorite}
    )(MovieDetails);