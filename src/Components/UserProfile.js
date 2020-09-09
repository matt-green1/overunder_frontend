import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class UserProfile extends React.Component {
    
    state = {
        newAvatar: "",
        edit: false
    }

    editHandler = () => {
        this.setState({...this.state, edit: !this.state.edit})
    }

    formController = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value})
    } 

    submitHelper = (e) => {
        e.preventDefault()
        this.props.editHandler(this.state.newAvatar)
        this.setState({ 
            newAvatar: "",
            edit: false
        })
    }

    render(){
    
    let average
    
    if (this.props.userRounds.length > 0) {

        let scoreArray = this.props.userRounds.map(round => {return round.round_score})
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
                <Image src={this.props.currentUser.avatar} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{this.props.currentUser.username}</Card.Header>
                <Card.Meta>Joined in 2020</Card.Meta>
                <Card.Description>
                    Average Score: {average.toFixed(2)}
                </Card.Description>
                </Card.Content>
                
                <Card.Content extra>   
                    {this.state.edit === false ?    
                        <>
                            <Button onClick={this.editHandler} circular >Edit</Button>
                            <Button onClick={this.props.deleteHandler} circular >Delete Account</Button>
                        </> 
                        :
                        <>
                            <form onSubmit={this.submitHelper} >
                                <input type="text" name="newAvatar" onChange={this.formController} value={this.state.newAvatar} />
                                <input type="submit" value="Submit Image" />
                            </form><br/>
                            <Button onClick={this.editHandler} circular >Cancel Edit</Button>
                            {/* <Button onClick={this.props.deleteHandler} circular >Submit Image</Button> */}
                        </> 
                    }
                </Card.Content>
            
            </Card>
            {/* <h5>Name: {props.currentUser.username}</h5>
            <h5>Average Score: {average.toFixed(2)}</h5> */}
            {/* <h5>All time Ranking: 5</h5> */}
            {/* <h5>Title: Yung Gamer</h5> */}
        </>
    )
        }
}

export default UserProfile