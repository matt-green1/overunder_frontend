//Wasn't sure if we put both sign up and log in on same form or have them separated out

import React from 'react'
import {withRouter } from 'react-router-dom'

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
            <>
                
                <h6>Log In:</h6>
                <form onSubmit={this.submitHelper}>
                    <input name="username" type="text" placeholder="Enter Username" value={this.state.username} onChange={this.changeHelper} />
                    <input name="password" type="text" placeholder="Enter Password" value={this.state.password} onChange={this.changeHelper} />
                    <input type="submit" value="Log in"/>
                </form>
        
                <p>Don't have an Account?</p>
                <button onClick={this.goToSignup}>Sign Up Here</button>
            </>
        )
    }
}


export default withRouter(LoginForm)