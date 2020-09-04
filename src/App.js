import React from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'
import NavBar from './Components/NavBar'
import LoginForm from './Components/LoginForm'
import Header from './Components/Header'
import { Route, Switch, withRouter } from 'react-router-dom'
import UserProfile from './Components/UserProfile'
import SignupForm from './Components/SignupForm'


//remember - install react router dom with: npm install react-router-dom

class App extends React.Component {
  
  state = {
    currentUser : null
  }

  clearUser = () => {
    localStorage.removeItem("token")
    this.setState({currentUser: null}, () => this.props.history.push("/"))
  }

  loginHandler = (userInfo) => {
      
      let configObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({user: userInfo})
      }   

      
      fetch('http://localhost:3000/api/v1/login', configObj)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem("token", data.jwt)
          this.setState({currentUser: data.user }, ()=> this.props.history.push("/home"))
        })
    
   }

    createHandler = (userInfo) => {
        
        let configObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({user: userInfo})
        }   

        
        fetch('http://localhost:3000/api/v1/new', configObj)
          .then(response => response.json())
          .then(data => {
            localStorage.setItem("token", data.jwt)
            this.setState({currentUser: data.user }, ()=> this.props.history.push("/home"))
          })
    }

    componentDidMount() {
      const token = localStorage.getItem("token")

      if (token) {
        fetch('http://localhost:3000/api/v1/profile', {
          method: "GET",
          headers: {Authorization: `Bearer ${token}`}
        }).then(res => res.json())
          .then(user => this.setState({currentUser: user.user}))

      } else {
        this.props.history.push("/")
      }

    }


  render() {
    
    return (
        <>
          <NavBar clearUser={this.clearUser} currentUser={this.state.currentUser} />
          <Header />
          
          <Switch>
              {this.state.currentUser 
                ? 
                <>
                  <Route path="/games" render={() => <MainContainer currentUser={this.state.currentUser} /> } />
                  <Route path={`/user/${this.state.currentUser.id}`} render={() => <UserProfile currentUser={this.state.currentUser} /> } />
                </>
                :
                <>
                  <Route exact path="/login" render={() => <LoginForm loginHandler={this.loginHandler} /> } />              
                  <Route exact path="/" render={() => <SignupForm createHandler={this.createHandler}/> } />
                </>
              }
              
          </Switch>
        </>
      );
  }
}

export default withRouter(App);

