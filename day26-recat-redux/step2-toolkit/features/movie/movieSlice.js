const createSlice = require("@reduxjs/toolkit").createSlice

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
        }
    }
})

module.exports = movieSlice.reducer;
module.exports.movieActions =movieSlice.actions;