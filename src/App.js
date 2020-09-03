import React from 'react';
import logo from './logo.svg';
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
        .then(data => this.setState({currentUser: data.user }, ()=> this.props.history.push("/home")))
    
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
          .then(data => this.setState({currentUser: data.user }, ()=> this.props.history.push("/home")))
    }


  render() {
    //console.log(this.state.currentUser)  
    return (
        <>
          <NavBar clearUser={this.clearUser} currentUser={this.state.currentUser} />
          <Header />
          
          <Switch>
              {this.state.currentUser 
                ? 
                <>
                  <Route path="/home" render={() => <MainContainer currentUser={this.state.currentUser} /> } />
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


{/* <Switch>
              {this.state.currentUser 
                ? 
                <>
                  <Route path="/" render={() => <MainContainer /> } />
                  <Route path="/user" render={() => <UserProfile /> } />
                </>
                :
                <>
                  <Route exact path="/login" render={() => <LoginForm loginHandler={this.loginHandler} /> } />              
                  <Route exact path="/" render={() => <SignupForm createHandler={this.createHandler}/> } />
                </>
              }
              
          </Switch> */}