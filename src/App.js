import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './Containers/MainContainer'
import NavBar from './Components/NavBar'
import LoginForm from './Components/LoginForm'
import Header from './Components/Header'
import { Route, Switch } from 'react-router-dom'
import UserProfile from './Components/UserProfile'
import GameContainer from './Containers/GameContainer'

//remember - install react router dom with: npm install react-router-dom

function App() {
  return (
    <>
      {/* this is where Tashawn had Navbar but maybe we should hide it until someone logs in? */}
      <NavBar />
      <Header />
      
      <Switch>
          <Route path="/postlogin" render={() => <MainContainer /> } />
          <Route path="/users/1" render={() => <UserProfile /> } />
          <Route path="/newgame" render={() => <GameContainer /> } />
          <Route path="/" render={() => <LoginForm/> } />
      </Switch>
    </>
  );
}

export default App;
