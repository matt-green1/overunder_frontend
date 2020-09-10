import React from 'react'
import Question from './Question'
import { Button, Image, Card,  } from 'semantic-ui-react'
import Animation from './Animation'

class GameShow extends React.Component {
    
    state = {
        questionNum: 0,
        totalScore: 0,
        liveGame: true
    }
    
      scoreBoss = (right) => {
        
        if (right === true) {
          let newScore = this.state.totalScore + 1
          this.setState({...this.state, totalScore: newScore})
        } else {
          console.log("wrong")
        }

      }
    
      nextQuestion = () => {
        let sliceStart = 0 + this.state.questionNum
        let sliceEnd = 1 + this.state.questionNum
        return this.props.newgame.questions.slice(sliceStart, sliceEnd)
      }
    
      questionObjectCreator = () => {
        return this.nextQuestion().map(questionObj => <Question key={questionObj.id} questionObject={questionObj} scoreBoss={this.scoreBoss} nextHelper={this.nextHelper}/> )
      }
    
      nextHelper = () => {
        //conditionals about getting quesiton right or wrong
        //conditional: if state.quesitonNum === questionArray.length -1 STOP redirect to gameContainer (can picka new game again)
        //results page? can click "try again" (same game type) or "newgameType" in game container
        this.setState({questionNum : this.state.questionNum + 1})
       
        if (this.state.questionNum === this.props.newgame.questions.length - 1) {
          this.setState({...this.state, liveGame: false}, () => this.props.newRound(this.state.totalScore, this.props.newgame))
        } else {

        }
        
      }





    render(){
        
        return(
          <>
            <Animation />
            {this.state.liveGame === true ? this.questionObjectCreator() : 
              <>
                <Card className='questioncards'>
              <Image src={this.props.newgame.image_url} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Results Page</Card.Header>
                <Card.Meta>
                  <span > Game Completed</span>
                </Card.Meta>
                Total Score: {this.state.totalScore}
              </Card.Content>
              <Card.Content extra>
              
              <Button onClick={this.props.viewGames}>See all Games</Button>
             
                </Card.Content>
            </Card>

              </>
            }
                
          </>
        )
    }

}

export default GameShow