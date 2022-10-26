import { Component } from "react";
import { connect } from "react-redux";
import {  addMovie,  removeMovie } from "../redux";

class MovieComp extends Component{
    render(){
        return <div>
            <h2>Movie Component</h2>
            <h3>Total number of Movies : {this.props.numOfMovies}</h3>
            <button onClick={this.props.addMovie}>Add hero</button>
            <button onClick={this.props.removeMovie}>Remove hero</button>
        </div>
    }
}

let mapStateToProps = (state)=>{
    return {
        numOfMovies : state.movies.numOfMovies
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        addMovie : ()=> dispatch(addMovie()),
        removeMovie : ()=> dispatch(removeMovie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieComp)