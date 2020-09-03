import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(props) {

    return (
        <ul>
            {props.currentUser ? 
            
                <>
                    <a onClick={props.clearUser} > 
                        <li>Log Out</li>
                    </a>
                
                    <NavLink to={`/user/${props.currentUser.id}`}>
                        <li>Profile</li>
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

            {/* <NavLink to="/newgame">
                <li>New Game</li>
            </NavLink> */}

        </ul>
    )

}

export default NavBar