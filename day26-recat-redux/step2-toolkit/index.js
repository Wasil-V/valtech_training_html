const store = require("./app/store");
const { movieActions } = require("./features/movie/movieSlice");

const heroActions = require("./features/hero/heroSlice").heroActions

console.log("Initial State", store.getState())

const unsubscribe= store.subscribe(()=>{
    console.log("Updated State ", store.getState());
})

store.dispatch(heroActions.addHero());
store.dispatch(heroActions.addHero());
store.dispatch(heroActions.removeHero());
store.dispatch(heroActions.addHero());
store.dispatch(heroActions.addHero());
store.dispatch(heroActions.removeHero());
store.dispatch(movieActions.addMovie());
store.dispatch(movieActions.addMovie());
store.dispatch(movieActions.removeMovie());

unsubscribe();