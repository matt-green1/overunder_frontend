import React from 'react'
import { Card, Button, Image, Progress, Icon } from 'semantic-ui-react'

class Question extends React.Component {
    
    state ={
        answered: false,
        correct: null
    }

    qHandler = (e) => {
        let questionAnswer
        let right
        if (this.props.questionObject.answer > this.props.questionObject.over_under_line) {
          questionAnswer = "Over"
        } else {
          questionAnswer = "Under"
        }

        if (e.target.innerText === questionAnswer) {
          right = true
          this.props.scoreBoss(right)
          this.setState({
            answered: true,
            correct: true
          })

        } else {
          right = false
          this.props.scoreBoss(right)
          this.setState({
            answered: true,
            correct: false
          })

        }
        
        
    }
    
    incrementor = () => {
      this.props.nextHelper()
      this.setState({
        answered: false,
        correct: null 
      })
    }
    
    render() {
     
      return (
            <>
            {this.state.answered === false ? 
            <>
              <Card className='questioncards'>
              <Image src={this.props.questionObject.img_url} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{this.props.questionObject.question}</Card.Header>
                <Card.Meta>
                  <span >Question {this.props.qNum}</span>
                </Card.Meta>
                  Over Under Line: {this.props.questionObject.over_under_line}
              </Card.Content>
              <Card.Content extra>
              <div className='ui two buttons'>
                <Button onClick={this.qHandler} basic color='red'>
                    Under
                </Button>
                <Button onClick={this.qHandler} basic color='green'>
                      Over
                </Button>
              </div>
                </Card.Content>
            </Card>

                {/* <br/><br/><br/><br/><br/>
                <img src={this.props.questionObject.img_url} alt={this.props.questionObject.question}/>
                <p>{this.props.questionObject.question}</p>
                <p>Over Under line: {this.props.questionObject.over_under_line}</p>
                <button onClick={this.qHandler}>Over</button>
                <button onClick={this.qHandler}>Under</button> */}
            </>
            :   
            <>
              {this.state.correct ? 
                <>
                  <Card className='questioncards'>
                    <Image src={this.props.questionObject.img_url} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{this.props.questionObject.question}</Card.Header>
                      <Card.Meta>
                      <span >Question {this.props.qNum}</span>
                      </Card.Meta>
                        Over Under Line: {this.props.questionObject.over_under_line}
                        <Card.Meta>
                        <span >Answer: {this.props.questionObject.answer}</span>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                    <Progress percent={100} success>
                       You're correct!
                    </Progress>
                    <Button onClick={this.incrementor} icon fluid labelPosition='right'>
                       Next Question
                      <Icon name='right arrow' />
                    </Button>
                      </Card.Content>
                  </Card>
        
                </>
              :
                <>
                  <Card className='questioncards'>
                    <Image src={this.props.questionObject.img_url} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{this.props.questionObject.question}</Card.Header>
                      <Card.Meta>
                        <span >Question {this.props.qNum}</span>
                      </Card.Meta>
                        Over Under Line: {this.props.questionObject.over_under_line}
                        <Card.Meta>
                        <span >Answer: {this.props.questionObject.answer}</span>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                    <Progress percent={100} error>
                       Wrong!
                    </Progress>
                    <Button onClick={this.incrementor} icon fluid labelPosition='right'>
                       Next Question
                      <Icon name='right arrow' />
                    </Button>
                      </Card.Content>
                  </Card>
                  {/* <img src={this.props.questionObject.img_url} alt={this.props.questionObject.question}/>
                  <p>{this.props.questionObject.question}</p>
                  <p>Over Under line: {this.props.questionObject.over_under_line}</p>
                  <p>Answer: {this.props.questionObject.answer}</p>
                  <p>Wrong!</p>
                  <button onClick={this.props.nextHelper}>Next question</button> */}
                </>
              }
            </>
            }
            </>
        )
    }

}

export default Question