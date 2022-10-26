const createSlice = require("@reduxjs/toolkit").createSlice

const initialState ={
    numberOfHeroes : 0
}

const heroSlice = createSlice({
    name: "hero",
    initialState : initialState,
    reducers : {
        addHero : (state)=>{
                state.numberOfHeroes++
        },
        removeHero : (state)=>{
            state.numberOfHeroes--
        },
        setHero : (state,action)=>{
            state.numberOfHeroes = action.payload
        }
    }
})

module.exports = heroSlice.reducer;
module.exports.heroActions =heroSlice.actions;