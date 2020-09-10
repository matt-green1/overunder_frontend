//NOTE: Want to think more about best way to impliment questions/gamecard
//GameCard could also be called Question container

import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'



//note: made state here just so the app doesn't break - the questions will come from props that come from the API call higher up

class GameCard extends React.Component {
    
    startHelper = () => {
        this.props.startGame(this.props.gameObject)
    }

    render() {
            return(
                <>
                     <Card className="gamecards">
                        <Image src={this.props.gameObject.image_url} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{this.props.gameObject.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Questions: {this.props.gameObject.questions.length}</span>
                        </Card.Meta>
                        <Card.Description>
                        {this.props.gameObject.description}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={this.startHelper}>~ Play Game ~</Button>
                        </Card.Content>
                    </Card>
                    
                </>
            )
        }

}

export default GameCard