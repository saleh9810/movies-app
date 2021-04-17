import {combineReducers} from 'redux'
import searchReducers from './searchReducers'
import favoriteReducer from './favoriteReducer'
export default combineReducers({
    movies : searchReducers,
    favorites : favoriteReducer
})