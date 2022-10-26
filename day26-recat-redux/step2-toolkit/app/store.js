const configureStore = require("@reduxjs/toolkit").configureStore
const heroReducer = require("../features/hero/heroSlice")
const movieRedcuer =require("../features/movie/movieSlice")

const store = configureStore({
    reducer : {
        hero : heroReducer,
        movie :movieRedcuer
    }
})

 module.exports = store