import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

function UserProfile(props) {
    let average
    if (props.userRounds.length > 0) {

        let scoreArray = props.userRounds.map(round => {return round.round_score})
        // console.log(scoreArray)
        average = scoreArray.reduce(function(a,b) {
            return a + b
        }, 0)  / scoreArray.length

    } else {
        average = 0
    }

    return (
        <>
            <Card className='profilecards'>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                <Card.Header>{props.currentUser.username}</Card.Header>
                <Card.Meta>Joined in 2020</Card.Meta>
                <Card.Description>
                    Average Score: {average.toFixed(2)}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>   
                    <Button circular >Edit</Button>
                    <Button onClick={props.deleteHandler}   circular >Delete Account</Button>
                </Card.Content>
            </Card>
            {/* <h5>Name: {props.currentUser.username}</h5>
            <h5>Average Score: {average.toFixed(2)}</h5> */}
            {/* <h5>All time Ranking: 5</h5> */}
            {/* <h5>Title: Yung Gamer</h5> */}
        </>
    )

}

export default UserProfile