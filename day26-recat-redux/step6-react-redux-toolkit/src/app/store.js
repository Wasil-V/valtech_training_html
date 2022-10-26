import {configureStore} from "@reduxjs/toolkit"
import heroReducer from "../features/hero/heroSlice"
import movieReducer from "../features/movie/movieSlice"



const store = configureStore({
    reducer : {
        hero : heroReducer,
        movie : movieReducer
    }
})

export default store