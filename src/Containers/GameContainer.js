import React from 'react'
import GameCard from '../Components/GameCard'
import { Card } from 'semantic-ui-react'


class GameContainer extends React.Component {

    createGameCards = () => {
        return this.props.gamesArray.map(gameObj => <GameCard key={gameObj.id} startGame={this.props.startGame} gameObject={gameObj} />)
    }

    render() {
        return (
            <div className="gameContainer">
                    <h1 className="gametitle">
                        <img id="leftimage" src="https://img.icons8.com/ios-filled/50/000000/joystick.png"/>&nbsp;  
                        Choose a Game 
                        &nbsp;<img id="rightimage" src="https://img.icons8.com/ios/50/000000/joystick.png"/>
                    </h1>
                <Card.Group centered>
                    {this.createGameCards()}

                </Card.Group>
                
            </div>
        )
    }

}


export default GameContainer