import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


const Navbar = ({favorite}) => {
    return (    
        <div className="navbar"> 
            <nav>
                <ul>
                    <li><NavLink exact activeClassName="active"   to="/">Home <i className="fas fa-home"></i></NavLink></li>
                    <li><NavLink exact activeClassName="active"  to="/favorites">Favorites</NavLink></li>
                    <li className="fav-length">{favorite.length}</li>
                </ul>
            </nav>
        </div>
      );
      
}



const mapStateToProps = (state) => {
    return {
        favorite : state.favorites.favorite
    }

}



export default connect(mapStateToProps)(Navbar);