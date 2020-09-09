import React from 'react'
import GameCard from '../Components/GameCard'
import { Card } from 'semantic-ui-react'


class GameContainer extends React.Component {

    createGameCards = () => {
        return this.props.gamesArray.map(gameObj => <GameCard key={gameObj.id} startGame={this.props.startGame} gameObject={gameObj} />)
    }

    render() {
        return (
            <>
                    <h3 className="gametitle">I'm the Game Container (I Hold ALLLLLL the games!) </h3>
                <Card.Group centered>
                    {this.createGameCards()}

                </Card.Group>
                
            </>
        )
    }

}


export default GameContainer