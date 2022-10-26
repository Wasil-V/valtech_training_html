
import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    numberOfMovies : 0
}

const movieSlice = createSlice({
    name: "movie",
    initialState : initialState,
    reducers : {
        addMovie : (state)=>{
                state.numberOfMovies++
        },
        removeMovie : (state)=>{
            state.numberOfMovies--
        },
        setMovie : (state, action)=>{
            state.numberOfMovies = action.payload
        }
    },
    extraReducers : {
        ['hero/addHero'] : (state)=> {state.numberOfMovies++}
    }
    // extraReducers : builder =>{
    //     builder.addCase(heroActions.addHero, state =>{
    //         state.numberOfMovies++
    //     })
    // }
})

export default movieSlice.reducer
export const {addMovie,removeMovie,setMovie} = movieSlice.actions;