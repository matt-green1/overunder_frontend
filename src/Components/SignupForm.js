import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Segment } from 'semantic-ui-react'
import Animation from "./Animation"

class SignupForm extends React.Component {

    state = {
        username: "",
        password: "",
        avatar: ""
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
                    <Form inverted onSubmit={this.submitHelper}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid name='username' type='text' label='Create Username' placeholder='Username' value={this.state.username} onChange={this.changeHelper} />
                        <Form.Input fluid name='password' type='password' label='Create Password' placeholder='Password' value={this.state.password} onChange={this.changeHelper}/>
                        <Form.Input fluid name='avatar' type='text' label='Input Image URL' placeholder='Avatar URL' value={this.state.avatar} onChange={this.changeHelper} />
                    </Form.Group>
                    
                    <span className="already">Already Have an account?</span>
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Button type='submit'>Sign Up</Button>
                    <Button floated='right' onClick={this.goToLogin}>Login Here</Button>
                    
                    </Form>
                </Segment>

                
          
                
            </>
        )
    }

}

export default withRouter(SignupForm)