import React from 'react'

class Question extends React.Component {
    render() {
        return (
            <>
                <br/><br/><br/><br/><br/>
                <img src={this.props.questionObject.img_url}/>
                <p>{this.props.questionObject.question}</p>
                <p>Over Under line: {this.props.questionObject.over_under_line}</p>
                <button onClick={this.props.nextHelper}>Next question</button>
            </>
        )
    }

}

export default Question