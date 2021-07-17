import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from '../actions/types'
import _ from 'lodash'


const initialState = {
    favorite:[],
  };



  export default function(state = initialState, action) {
    switch(action.type) {

               

                case ADD_TO_FAVORITE:

                  return {...state, favorite: [action.payload, ...state.favorite],  };
                          
                  case REMOVE_FROM_FAVORITE: 

                return {favorite: state.favorite.filter(favorite => favorite.imdbID !== action.payload.imdbID)};
                
               
            default: return state
    }
}