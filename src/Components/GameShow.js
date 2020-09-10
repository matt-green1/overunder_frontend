import React from 'react'
import Question from './Question'
import { Button, Image, Card,  } from 'semantic-ui-react'
import BabyAnimals from './GameAnimations/BabyAnimals'
import TechFacts from './GameAnimations/TechFacts'
import Athlete from './GameAnimations/Athlete'
import Art from './GameAnimations/Art'
import Celebrity from './GameAnimations/Celebrity'
import Media from './GameAnimations/Media'
import WorldRecords from './GameAnimations/WorldRecords'
import LiquidMeasurement from './GameAnimations/LiquidMeasurement'

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
        return this.nextQuestion().map((questionObj) => <Question qNum={this.state.questionNum + 1} questionObject={questionObj} scoreBoss={this.scoreBoss} nextHelper={this.nextHelper}/> )
      }
    
      nextHelper = () => {
        this.setState({questionNum : this.state.questionNum + 1})
       
        if (this.state.questionNum === this.props.newgame.questions.length - 1) {
          this.setState({...this.state, liveGame: false}, () => this.props.newRound(this.state.totalScore, this.props.newgame))
        } else {

        }
        
      }


      animationRender = () => {
        if(this.props.newgame.title === "Tech Facts") {
          return <TechFacts />
        } else if(this.props.newgame.title === "Baby Animals") {
          return <BabyAnimals />
        } else if (this.props.newgame.title === "Celebrity Net Worth") {
          return <Celebrity />
        } else if (this.props.newgame.title === "Most Viewed Media of All Time") {
          return <Media />
        } else if (this.props.newgame.title === "Art Facts") {
          return <Art />
        } else if (this.props.newgame.title === "Athlete Salaries") {
          return <Athlete />
        } else if (this.props.newgame.title === "Weird World Records") {
          return <WorldRecords />
        } else if (this.props.newgame.title === "Liquid Measurement") {
          return < LiquidMeasurement />
        }

      
      }


      render(){
        
        return(
          <>
            {this.animationRender()}
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