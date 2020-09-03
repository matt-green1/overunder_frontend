import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(props) {
    return (
        <ul>
            {props.currentUser ? 
            
            <NavLink to="/">
                <li>Log in</li>
            </NavLink>
            
            :    
                
            <NavLink to="/">
                <li>Log Out</li>
            </NavLink>

            }


            {/* <NavLink to="/newgame">
                <li>New Game</li>
            </NavLink> */}

            <NavLink to="/users/1">
                <li>Profile</li>
            </NavLink>
        </ul>
    )

}

export default NavBar