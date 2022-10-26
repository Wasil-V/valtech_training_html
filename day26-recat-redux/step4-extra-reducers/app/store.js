const configureStore = require("@reduxjs/toolkit").configureStore
const heroReducer = require("../features/hero/heroSlice")
const movieRedcuer =require("../features/movie/movieSlice")
const logger = require("redux-logger").createLogger

const store = configureStore({
    reducer : {
        hero : heroReducer,
        movie :movieRedcuer
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger())
})

 module.exports = store