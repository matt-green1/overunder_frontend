import React from 'react'

class Question extends React.Component {
    
    state ={
        answered: false
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
        } else {
          right = false
        }
        
        this.props.scoreBoss(right)
        this.setState({answered: true})
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
                <img src={this.props.questionObject.img_url} alt={this.props.questionObject.question}/>
                <p>{this.props.questionObject.question}</p>
                <p>Over Under line: {this.props.questionObject.over_under_line}</p>
                <p>Answer: {this.props.questionObject.answer}</p>
                <button onClick={this.props.nextHelper}>Next question</button>
            </>
            }
            </>
        )
    }

}

export default Question