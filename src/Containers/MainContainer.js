import React from 'react'
import GameContainer from './GameContainer'
import { Route, Switch, withRouter } from 'react-router-dom'


class MainContainer extends React.Component {
    
    state = {
        newgame: false
    }
    
    newgameHelper = () => {
        
    }

    render() {
        return(
            <>
                <h1>Main Container reporting for duty!</h1>
                <GameContainer newgameHelper={this.newgameHelper} /> 
            </>
        )

    }


}

export default withRouter(MainContainer)