import React from 'react'

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
    
    
    render() {
        return (
            <>
            {this.state.answered === false ? 
            <>
                <br/><br/><br/><br/><br/>
                <img src={this.props.questionObject.img_url} alt={this.props.questionObject.question}/>
                <p>{this.props.questionObject.question}</p>
                <p>Over Under line: {this.props.questionObject.over_under_line}</p>
                <button onClick={this.qHandler}>Over</button>
                <button onClick={this.qHandler}>Under</button>
            </>
            :   
            <>
              {this.state.correct ? 
                <>
                  <img src={this.props.questionObject.img_url} alt={this.props.questionObject.question}/>
                  <p>{this.props.questionObject.question}</p>
                  <p>Over Under line: {this.props.questionObject.over_under_line}</p>
                  <p>Answer: {this.props.questionObject.answer}</p>
                  <p>Correct!</p>
                  <button onClick={this.props.nextHelper}>Next question</button>
                </>
              :
                <>
                  <img src={this.props.questionObject.img_url} alt={this.props.questionObject.question}/>
                  <p>{this.props.questionObject.question}</p>
                  <p>Over Under line: {this.props.questionObject.over_under_line}</p>
                  <p>Answer: {this.props.questionObject.answer}</p>
                  <p>Wrong!</p>
                  <button onClick={this.props.nextHelper}>Next question</button>
                </>
              }
            </>
            }
            </>
        )
    }

}

export default Question