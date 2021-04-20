import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Segment } from 'semantic-ui-react'
import Animation from "./Animation"

class SignupForm extends React.Component {

    state = {
        username: "",
        password: "",
        avatar: "https://bit.ly/3v3AHjv"
    }

    changeHelper = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value })
    }

    submitHelper = (e) => {
        e.preventDefault()
        this.props.createHandler(this.state)
    }

    goToLogin = () => {
        this.props.history.push("/login")
    }

    render() {
        return (
            <>
                <Animation />


                <Segment className='signup' inverted>
                    
                        <h2 className='scores'>Create Account:</h2>
                        
                        <Form inverted onSubmit={this.submitHelper} >
                            {/* note - start with the props for this form.group - maybe takw off equal and justify content in the group? */}
                            {/* <Form.Group widths='equal'> */}
                            <Form.Group id="signupformstyle">
                                <Form.Input className="signupinput" fluid name='username' type='text' label='Create Username' placeholder='Username' value={this.state.username} onChange={this.changeHelper} />
                                <Form.Input className="signupinput" fluid name='password' type='password' label='Create Password' placeholder='Password' value={this.state.password} onChange={this.changeHelper}/>
                                <Form.Input className="signupinput" fluid name='avatar' type='text' label='Profile Image URL' placeholder='Avatar URL' value={this.state.avatar} onChange={this.changeHelper} />
                                <Button id="signupsubmit" type='submit'>Sign Up</Button>
                            </Form.Group>
                            
                            <div id="tologinwrapper">
                                <p>Already Have an account?</p>
                                <Button onClick={this.goToLogin} size="tiny" id="tologinpage">Login Here</Button>
                            </div>
                        
                            {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
                        </Form>
        
                </Segment>

            </>
        )
    }

}

export default withRouter(SignupForm)