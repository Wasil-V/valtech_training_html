const configureStore = require("@reduxjs/toolkit").configureStore

const logger =require("redux-logger").createLogger

const userReducer = require("../features/users/userSlice");

const store = configureStore({
        reducer :{
        user : userReducer 
        },
        middleware : (getDefaultMiddlewares)=> getDefaultMiddlewares().concat(logger())
})

module.exports = store
