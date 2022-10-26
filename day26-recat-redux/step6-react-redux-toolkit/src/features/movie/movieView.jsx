import { addMovie, removeMovie, setMovie } from "./movieSlice";


const { useSelector, useDispatch } = require("react-redux")


let MovieView = ()=>{

    let numberOfMovies = useSelector(state => state.movie.numberOfMovies);
    let dispatch = useDispatch()
    return <div>
    <h2>Number of Movies : {numberOfMovies}</h2>
    <button onClick={()=>dispatch(addMovie())}>Add Movie</button>
    <button onClick={()=>dispatch(removeMovie())}>Remove Movie</button>
    <button onClick={()=>dispatch(setMovie(10))}>Set Movie</button>
    </div>
}

export default MovieView