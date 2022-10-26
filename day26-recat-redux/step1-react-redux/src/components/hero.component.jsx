import { Component } from "react";
import { connect } from "react-redux";
import { addHero, removeHero } from "../redux";

class HeroComp extends Component{
    render(){
        return <div>
            <h2>Hero Component</h2>
            <h3>Total number of Heroes : {this.props.numOfHeroes}</h3>
            <button onClick={this.props.addHero}>Add hero</button>
            <button onClick={this.props.removeHero}>Remove hero</button>
        </div>
    }
}

let mapStateToProps = (state)=>{
    return {
        numOfHeroes : state.heroes.numOfHeroes
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        addHero : ()=> dispatch(addHero()),
        removeHero : ()=> dispatch(removeHero())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroComp)