import {  useDispatch, useSelector } from "react-redux";
import {  addMovie, removeMovie } from "../redux";


let MovieHookComp = ()=>{

    let numberhook = useSelector(state => state.movies.numOfMovies)
    let dispatch =useDispatch()
    return <div>
    <h2>Movie Hook Component</h2>
    <h3>Total number of Movies : {numberhook}</h3>
    <button onClick={()=>dispatch(addMovie())}>Add hero</button>
    <button onClick={()=>dispatch(removeMovie())}>Remove hero</button>
</div>
}





export default MovieHookComp