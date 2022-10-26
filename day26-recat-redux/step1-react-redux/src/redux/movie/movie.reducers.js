
import { ADD_MOVIE, REMOVE_MOVIE } from "./movie.types"

const movieInitialState= {
    numOfMovies : 0
}

const movieReducer = (state = movieInitialState,action)=>{
    switch(action.type){
        case ADD_MOVIE : return {...state, numOfMovies : state.numOfMovies + 1 }
        case REMOVE_MOVIE : return {...state, numOfMovies : state.numOfMovies - 1 }
        default :  return state
    }
}

export {movieReducer}