import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(props) {

    return (
        <ul>
            {props.currentUser ? 
            
                <>
                     
                        <li onClick={props.clearUser}>Log Out</li>
                    
                
                    <NavLink to={`/user/${props.currentUser.id}`}>
                        <li>Profile</li>
                    </NavLink>
                    <NavLink to="/games">
                        <li>All Games</li>
                    </NavLink>
                    <NavLink to="/topscores">
                        <li>Top Scores</li>
                    </NavLink>
                </>
            :   
                    <>
                        {window.location.pathname === "/login" ?
                        
                        
                            <NavLink to="/">
                                <li>Create Account</li>
                            </NavLink>
                        
                            :
                            
                            <NavLink to="/login">
                                <li>Log In</li>
                            </NavLink>
                        }
                    </>
            }

        </ul>
    )

}

export default NavBar