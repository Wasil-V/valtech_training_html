import {createSlice} from "@reduxjs/toolkit"

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

export default heroSlice.reducer
export const {addHero,removeHero,setHero} = heroSlice.actions;