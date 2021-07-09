import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from '../actions/types'
import _ from 'lodash'


const initialState = {
    favorite:[],
    loading: false,
  };



  export default function(state = initialState, action) {
    switch(action.type) {

               

                case ADD_TO_FAVORITE:

                 if(!state.favorite.some(alreadyFavorite => alreadyFavorite.imdbID === action.payload.imdbID)) {
                  return {...state, favorite: [action.payload, ...state.favorite],  };
                   
                 }else {
                   return {...state}
                 }

                 
                 
    
                 
                case REMOVE_FROM_FAVORITE: 

                return {favorite: state.favorite.filter(favorite => favorite.imdbID !== action.payload.imdbID)};
                
               
            default: return state
    }
}