import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


const Navbar = ({favorite}) => {
    return (    
        <div className="nav-buttons"> 


                    <div className="nav">
                        
                                <div className="home" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><NavLink exact activeClassName="active" className="nav-btn"   to="/">Home <i className="fas fa-home"></i></NavLink></div>
                                <div className="fav" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><NavLink exact activeClassName="active" className="nav-btn"  to="/favorites">Favorites <span className="fav-length">{favorite.length}</span></NavLink></div>

                   </div>


             
               

        </div>
      );
      
}



const mapStateToProps = (state) => {
    return {
        favorite : state.favorites.favorite
    }

}



export default connect(mapStateToProps)(Navbar);