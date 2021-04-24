import React from 'react'
import { Card, Image, Button, Form } from 'semantic-ui-react'
import Animation from './Animation'

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
            <Animation/>
            <Card className='profilecards'>
                <Image src={this.props.currentUser.avatar} wrapped ui={false} />
                <Card.Content>
                <Card.Header id="profileusername">Username: {this.props.currentUser.username}</Card.Header>
                <Card.Meta>Joined in 2021</Card.Meta>
                <Card.Description>
                    Average Score: {average.toFixed(2)}
                </Card.Description>
                </Card.Content>
                
                <Card.Content extra>   
                    {this.state.edit === false ?    
                        <>
                            <Button onClick={this.editHandler} circular >Edit Profile Image</Button>
                            <Button onClick={this.props.deleteHandler} circular >Delete Account</Button>
                        </> 
                        :
                        <>
                            
                            <Form onSubmit={this.submitHelper} >                               
                               
                                 <Form.Input fluid type="text" name="newAvatar" onChange={this.formController} value={this.state.newAvatar}/>
                                                                
                                    
                            </Form>
                            <br></br>
                            {/* <form onSubmit={this.submitHelper} >
                                <input type="text" name="newAvatar" onChange={this.formController} value={this.state.newAvatar} />
                                <input type="submit" value="Submit Image" />
                            </form><br/> */}
                            <Button onClick={this.editHandler} circular >Cancel Edit</Button>
                            <Button onClick={this.submitHelper} circular >Submit Image</Button>
                        </> 
                    }
                </Card.Content>
            
            </Card>
            
        </>
    )
        }
}

export default UserProfile