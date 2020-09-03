import React from 'react'
import GameCard from '../Components/GameCard'

class GameContainer extends React.Component {

    createGameCards = () => {
        return this.props.gamesArray.map(gameObj => <GameCard startGame={this.props.startGame} gameObject={gameObj} />)
    }

    render() {
        return (
            <>
                <h3>I'm the Game Container (I Hold ALLLLLL the games!) </h3>
                {this.createGameCards()}
                
            </>
        )
    }

}


export default GameContainer