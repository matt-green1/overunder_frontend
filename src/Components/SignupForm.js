import React from 'react'
import { withRouter } from 'react-router-dom'


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
                <h6>Create Account:</h6>
                <form onSubmit={this.submitHelper}>
                    <input name="username" type="text" placeholder="Create Username" value={this.state.username} onChange={this.changeHelper} />
                    <input name="password" type="text" placeholder="Create Password" value={this.state.password} onChange={this.changeHelper} />
                    <input name="avatar" type="text" placeholder="Input Image Url" value={this.state.avatar} onChange={this.changeHelper} />
                    <input type="submit" value="Sign Up"/>
                </form>            
          
                <p>Already have an Account?</p>
                <button onClick={this.goToLogin}>Login Here</button>
            </>
        )
    }

}

export default withRouter(SignupForm)