import React, { Component } from 'react';
import {searchMovie, fetchMovies} from '../../actions'
import {connect} from 'react-redux'

class SearchForm extends Component {

    onChange = e => {
        this.props.searchMovie(e.target.value);
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.fetchMovies(this.props.text)
    }
   
    render() { 
        return ( 
            <form className="input-group form" onSubmit={this.onSubmit}>
                  <input placeholder="Search for any movie or tv-series" onChange={this.onChange} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                  <span className="input-group-btn">
                  <button className="btn">Submit</button>
                  </span>
            </form>
         );
    }
}

const mapStateToProps = (state) => ({
    text: state.movies.text
})



export default connect(mapStateToProps, {searchMovie, fetchMovies})(SearchForm);