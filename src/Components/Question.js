import React from 'react'

class Question extends React.Component {
    render() {
        return (
            <>
                <br/><br/><br/><br/><br/>
                <h3>Note: Below Question component that will only be rendered when you click the button on the gameCard</h3>
                <p>Question + Image</p>
                <button>Next question</button>
            </>
        )
    }

}

export default Question