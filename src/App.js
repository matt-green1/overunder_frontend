import React from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'
import NavBar from './Components/NavBar'
import LoginForm from './Components/LoginForm'
import Header from './Components/Header'
import { Route, Switch, withRouter } from 'react-router-dom'
import UserProfile from './Components/UserProfile'
import SignupForm from './Components/SignupForm'
import TopScores from './Components/TopScores'


//remember - install react router dom with: npm install react-router-dom

class App extends React.Component {
  
  state = {
    currentUser : null,
    userRounds: []
  }

  clearUser = () => {
    localStorage.removeItem("token")
    this.setState({currentUser: null,
                  userRounds: []
    }, () => this.props.history.push("/"))
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
          //localStorage.setItem("rounds", data.user.rounds)
          this.setState({currentUser: data.user, userRounds: data.user.rounds }, ()=> this.props.history.push("/games"))
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
            this.setState({currentUser: data.user }, ()=> this.props.history.push("/games"))
          })
    }

    componentDidMount() {
      const token = localStorage.getItem("token")
      
      if (token) {
        fetch('http://localhost:3000/api/v1/profile', {
          method: "GET",
          headers: {Authorization: `Bearer ${token}`}
        }).then(res => res.json())
          .then(user => {
            this.setState(
              {currentUser: user.user,
              userRounds: user.user.rounds}
              )
          }
          )
          //need to find a way to refresh and maintain rounds

      } else {
        this.props.history.push("/")
      }

    }

      newRound = (newScore, game) => {
      
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
          //extra header here for jwt?
        },
        body: JSON.stringify({
          user_id: parseInt(this.state.currentUser.id),
          game_id: parseInt(game.id),
          round_score: parseInt(newScore)
        })
      }

      fetch('http://localhost:3000/api/v1/rounds', options)
      .then(res => res.json())
      .then(newRound => this.setState({userRounds: [...this.state.userRounds, newRound]})
      )
      
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
                  <Route path="/games" render={() => <MainContainer currentUser={this.state.currentUser} newRound={this.newRound}/> } />
                  <Route path={`/user/${this.state.currentUser.id}`} render={() => <UserProfile userRounds={this.state.userRounds} currentUser={this.state.currentUser} /> } />
                  <Route path={"/topscores"} render={() => <TopScores />}/>
                </>
                :
                <>
                  <Route exact path="/" render={() => <SignupForm createHandler={this.createHandler}/> } />
                  <Route path="/login" render={() => <LoginForm loginHandler={this.loginHandler} /> } />              
                </>
              }
              
          </Switch>
        </>
      );
  }
}

export default withRouter(App);

