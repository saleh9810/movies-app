import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from './types';
import axios from 'axios';


const APIKey = 'a1812a11'




export const searchMovie = (text) => (dispatch) => {
    dispatch({
        type:SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text =>  dispatch => {
    axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
      .then(response =>
        dispatch({
          type: FETCH_MOVIES,
          payload: response.data.Search
        })
      )
      .catch(err => console.log(err));
  };

  export const fetchMovie = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response => 
        dispatch({
          type: FETCH_MOVIE,
          payload: response.data
        })
      
      )
      .catch(err => console.log(err));
  }

  export const addToFavorite = (movie)  =>  (dispatch) => {
 
    dispatch({
      type: ADD_TO_FAVORITE,
      payload: movie
    })
    
  }


  

  export const removeFromFavorite = (movie) =>  dispatch => {
      dispatch({
      type: REMOVE_FROM_FAVORITE,
      payload: movie
    })

    
  }





  export const setLoading = () => {
    return {
      type: LOADING
    }
  }