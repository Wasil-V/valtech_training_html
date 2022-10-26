
import {  useDispatch, useSelector } from "react-redux";
import { addHero, removeHero } from "../redux";


let HeroHookComp = ()=>{

    let numberhook = useSelector(state => state.heroes.numOfHeroes)
    let dispatch =useDispatch()
    return <div>
    <h2>Hero Hook Component</h2>
    <h3>Total number of Heroes : {numberhook}</h3>
    <button onClick={()=>dispatch(addHero())}>Add hero</button>
    <button onClick={()=>dispatch(removeHero())}>Remove hero</button>
</div>
}





export default HeroHookComp