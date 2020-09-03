import React from 'react'
import Question from './Question'

class GameShow extends React.Component {
    
    state = {
        questionNum: 0,
        totalScore: 0
    }
    
    
      nextQuestion = () => {
        let sliceStart = 0 + this.state.questionNum
        let sliceEnd = 1 + this.state.questionNum
        return this.props.newgame.questions.slice(sliceStart, sliceEnd)
      }
    
      questionObjectCreator = () => {
        return this.nextQuestion().map(questionObj => <Question questionObject={questionObj} nextHelper={this.nextHelper}/> )
      }
    
      nextHelper = () => {
        //conditionals about getting quesiton right or wrong
        //conditional: if state.quesitonNum === questionArray.length -1 STOP redirect to gameContainer (can picka new game again)
        //results page? can click "try again" (same game type) or "newgameType" in game container
        this.setState({questionNum : this.state.questionNum + 1})
      }





    render(){
        
        return(
            <>
                {this.questionObjectCreator()}
            </>
        )
    }

}

export default GameShow