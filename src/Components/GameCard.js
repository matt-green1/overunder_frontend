//NOTE: Want to think more about best way to impliment questions/gamecard
//GameCard could also be called Question container

import React from 'react'
import Question from './Question'

//note: made state here just so the app doesn't break - the questions will come from props that come from the API call higher up

class GameCard extends React.Component {
    
    state = {
        questionArray: []
    }

    generateQuestions = () => {
        return this.state.questionArray.map(questionObj => <Question questionObject={questionObj}/>)
    }
    
    render() {
            return(
                <>
                    <br/><br/><br/>
                    <h3>I'm the game card</h3>
                    <button>TYPE: Guess the value of SOMETHING</button>
                    {this.generateQuestions()}
                    <Question/>
                </>
            )
        }

}

export default GameCard