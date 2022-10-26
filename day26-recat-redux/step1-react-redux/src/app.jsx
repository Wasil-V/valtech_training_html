import { Component } from "react";
import HeroComp from "./components/hero.component";
import HeroHookComp from "./components/hero.hook.component";
import MovieComponent from "./components/movie.component";
import MovieHookComp from "./components/movie.hook.component";



class App extends Component{
    render(){
        return <div>
            <h1>Welcome Back</h1>
            <HeroComp/>
            <HeroHookComp/>
            <hr />
            <MovieComponent/>
            <MovieHookComp/>
            
        </div>
    }
}

export default App