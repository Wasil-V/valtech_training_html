import store from "./app/store"
import {Provider} from "react-redux"
import HeroView from "./features/hero/heroView"
import MovieView from "./features/movie/movieView"


let App =()=>{
    return <div>
        <h1>React - Redux Toolkit</h1>
        <Provider store={store}>
            <HeroView/>
            <hr />
            <MovieView/>
        </Provider>
    </div>
}

export default App