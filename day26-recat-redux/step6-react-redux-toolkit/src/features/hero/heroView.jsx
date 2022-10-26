import { addHero, removeHero, setHero } from "./heroSlice";

import {useSelector, useDispatch} from "react-redux"


let HeroView = ()=>{

    let numberOfHeroes = useSelector(state => state.hero.numberOfHeroes);
    let dispatch = useDispatch()
    return <div>
    <h2>Number of Heroes : {numberOfHeroes}</h2>
    <button onClick={()=>dispatch(addHero())}>Add hero</button>
    <button onClick={()=>dispatch(removeHero())}>Remove hero</button>
    <button onClick={()=>dispatch(setHero(10))}>Set hero</button>
    </div>
}

export default HeroView