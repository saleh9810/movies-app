import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from '../actions/types'
import _ from 'lodash'


const initialState = {
    favorite:[],
    loading: false,
  };



  export default function(state = initialState, action) {
    switch(action.type) {

                case ADD_TO_FAVORITE:

                 if(state.favorite.includes(action.payload)) {
                  return {favorite: state.favorite.filter(favorite => favorite !== action.payload)};
                   
                 }
                 

                  return {
                    ...state, favorite: [action.payload, ...state.favorite],
                    loading : false,
                  }
    
                 
                case REMOVE_FROM_FAVORITE: 

                return {favorite: state.favorite.filter(favorite => favorite !== action.payload)};
                
               
            default: return state
    }
}