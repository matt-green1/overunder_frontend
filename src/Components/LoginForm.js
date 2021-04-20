//Wasn't sure if we put both sign up and log in on same form or have them separated out

import React from 'react'
import {withRouter } from 'react-router-dom'
import { Button, Form, Segment } from 'semantic-ui-react'
import Animation from "./Animation"

class LoginForm extends React.Component {

    state = {
        username: "",
        password: ""
    }

    changeHelper = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value })
    }

    submitHelper = (e) => {
        e.preventDefault()
        this.props.loginHandler(this.state)
    }

    goToSignup = () => {
        this.props.history.push("/")
    }

    render(){
        return(
            <div>
                <Animation id="ourSky" />
                <Segment className='login' inverted>
                    
                        <h2 className='scores'>Log In:</h2>
                        <Form inverted onSubmit={this.submitHelper}>
                            <Form.Group id="loginformstyle">
                                <Form.Input className="logininput" fluid name='username' type='text' label='Enter Username' placeholder='Username' value={this.state.username} onChange={this.changeHelper} />
                                <Form.Input className="logininput" fluid name='password' type='password' label='Enter Password' placeholder='Password' value={this.state.password} onChange={this.changeHelper}/>
                                <Button id="loginsubmit" type='submit'>Log In</Button>
                            </Form.Group>
                            
                        <div id="tosignupwrapper">
                            <p id="donthave">Don't have an Account?</p>
                            <Button onClick={this.goToSignup} size="tiny" >Sign Up Here</Button>
                        </div>
                        </Form>
                   
                </Segment>
                
            </div>
        )
    }
}


export default withRouter(LoginForm)