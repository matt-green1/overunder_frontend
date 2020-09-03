//NOTE: Want to think more about best way to impliment questions/gamecard
//GameCard could also be called Question container

import React from 'react'


//note: made state here just so the app doesn't break - the questions will come from props that come from the API call higher up

class GameCard extends React.Component {
    
    startHelper = () => {
        this.props.startGame(this.props.gameObject)
    }

    render() {
            return(
                <>
                    <br/><br/><br/>
                    <h3>{this.props.gameObject.title}</h3>
                    <img src={this.props.gameObject.image_url} />
                    <p>{this.props.gameObject.description}</p>

                    <button onClick={this.startHelper} >~ Play Game ~</button>
                </>
            )
        }

}

export default GameCard