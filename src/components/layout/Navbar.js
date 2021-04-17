import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


const Navbar = ({favorite}) => {
    return (    
        <div className="navbar"> 
            <nav>
                <ul>
                    <li><NavLink exact activeClassName="active"   to="/">Home <i className="fas fa-home"></i></NavLink></li>
                    <li><NavLink exact activeClassName="active"  to="/favorites">Favorites <i style={{color: "red"}} className="fas fa-heart"> {favorite.length}</i></NavLink></li>
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