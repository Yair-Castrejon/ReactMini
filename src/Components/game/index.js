import React, {Component} from 'react';
import GameIMG from "../Global/images/game.jpg";

class Game extends Component{
    render(){
        return(
            <div>
                <h1 style={{color : "white"}}>Maybe later (?) :3c</h1>
                <img src={GameIMG}></img>
            </div>
        );
    }
}

export default Game;