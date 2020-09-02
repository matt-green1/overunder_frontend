//Wasn't sure if we put both sign up and log in on same form or have them separated out

import React from 'react'

class LoginForm extends React.Component {

    state = {
        loginname: "",
        loginname: "",
        newname: "",
        newpw: ""
    }

    changeHelper = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value })
    }

    //***forms need Submit Handlers - didn't want to string too much together before we understand routes

    render(){
        return(
            <>
                
                <p>Welcome to Meli's Guessing Game, the number one place for guessing on the internet!</p>
                
                <h6>Log In:</h6>
                <form>
                    <input name="loginname" type="text" placeholder="Enter Username" value={this.state.loginname} onChange={this.changeHelper} />
                    <input name="loginpw" type="text" placeholder="Enter Password" value={this.state.loginpw} onChange={this.changeHelper} />
                    <input type="submit" value="Log in"/>
                </form>
            
                <h6>Create Account:</h6>
                <form>
                    <input name="newname" type="text" placeholder="Create Username" value={this.state.newname} onChange={this.changeHelper} />
                    <input name="newpw" type="text" placeholder="Create Password" value={this.state.newpw} onChange={this.changeHelper} />
                    <input type="submit" value="Sign Up"/>
                </form>


            </>
        )
    }
}


export default LoginForm