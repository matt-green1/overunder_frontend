import React from 'react'
import GameCard from '../Components/GameCard'

class GameContainer extends React.Component {

    render() {
        return (
            <>
                <h3>I'm the Game Container (I Hold ALLLLLL the games!) </h3>
                <GameCard />
            </>
        )
    }

}


export default GameContainer