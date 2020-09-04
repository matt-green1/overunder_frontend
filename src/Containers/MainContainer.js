import React from 'react'
import GameContainer from './GameContainer'
import {withRouter} from 'react-router-dom'
import GameShow from '../Components/GameShow'

class MainContainer extends React.Component {
    
    state = {
        newgame: null,
        gamesArray: []
    }
    
    componentDidMount() {
        fetch("http://localhost:3000/api/v1/games")
            .then(response => response.json())
            .then(gameData => this.setState({...this.state, gamesArray: gameData}))
    }

    newgameHelper = () => {
        
    }

    startGame = (gameObj) => {
        this.setState({...this.state, newgame: gameObj})
    }

    viewGames = (e) => {
        this.setState({...this.state, newgame: null})
    }


    render() {
        
        return(
            <>
                {this.state.newgame ?
                    <GameShow newRound={this.props.newRound} viewGames={this.viewGames} newgame={this.state.newgame} />
                    :
                    <GameContainer startGame={this.startGame} gamesArray={this.state.gamesArray} newgameHelper={this.newgameHelper} /> 
                }
            </>
        )

    }


}

export default withRouter(MainContainer)