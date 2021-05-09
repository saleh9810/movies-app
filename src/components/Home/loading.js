import React, { Component } from 'react';
import SearchForm from './SearchForm';
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import MovieContainer from './MovieContainer'



class loading extends Component {

    render() { 
        const {loading} = this.props;
        return ( 
            <div>
                <SearchForm />
              {loading ? <Spinner /> :  <MovieContainer /> }  
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        loading: state.movies.loading
    }
}
export default connect(mapStateToProps)(loading);